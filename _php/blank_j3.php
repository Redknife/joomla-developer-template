<?php defined('_JEXEC') or die;

defined('DS') or define('DS', DIRECTORY_SEPARATOR);

require_once __DIR__.'/renderer/head_j3.php';
require_once __DIR__.'/renderer/foot_j3.php';

class blank_j3{

    protected $_template;
    protected $_params;

    public function __construct(JDocumentHTML $template)
    {
        if (!$template instanceof JDocumentHTML)
        {
            return false;
        }

        $this->_template    = $template;
        $this->_params      = $template->params;

        $menu = JFactory::getApplication()->getMenu();
        $activeMenu = $menu->getActive();
        //merge menu params with template params
        jimport( 'joomla.utilities.arrayhelper' );
        $params = array_merge($activeMenu->params->toArray(), $this->_params->toArray());
        $this->params = JArrayHelper::toObject($params, 'JRegistry');

        // check for position
        $this->show_top = $template->countModules('top');
        $this->show_top_left = $template->countModules('top-left');
        $this->show_top_center = $template->countModules('top-center');
        $this->show_top_right = $template->countModules('top-right');
        $this->show_user1 = $template->countModules('user1');
        $this->show_user2 = $template->countModules('user2');
        $this->show_user3 = $template->countModules('user3');
        $this->show_content_header = $template->countModules('content-header');
        $this->show_content_footer = $template->countModules('content-footer');
        $this->show_left = $template->countModules('left');
        $this->show_right = $template->countModules('right');
        $this->show_bottom_left = $template->countModules('bottom-left');
        $this->show_bottom_center = $template->countModules('bottom-center');
        $this->show_bottom_right = $template->countModules('bottom-right');
        $this->show_bottom = $template->countModules('bottom');
        $this->show_bottom_socials = $template->countModules('bottom-socials');
        $this->show_footer = $template->countModules('footer');
    }

    public function getContentClass()
    {
        $content_class = '';
        if($this->show_left)
        {
            $content_class .= ' with-lsidebar';
        }
        if($this->show_right)
        {
            $content_class .= ' with-rsidebar';
        }
        return $content_class;
    }

    public function getYandexMetrika(){
        $id = $this->_params->get('yandex_metrika_id');

        if(isset($id)){
            $param_webvisor = $this->_params->get('yandex_metrika_webvisor');
            $param_clickmap = $this->_params->get('yandex_metrika_clickmap');
            $param_tracklinks = $this->_params->get('yandex_metrika_tracklinks');
            $param_accuratetrack = $this->_params->get('yandex_metrika_accuratetrack');
            $param_noindex = $this->_params->get('yandex_metrika_noindex');

            $webvisor = $param_webvisor ? 'true' : 'false';
            $clickMap = $param_clickmap ? 'true' : 'false';
            $tracklinks = $param_tracklinks ? 'true' : 'false';
            $accurateTrackBounce = $param_accuratetrack ? 'true' : 'false';
            $noIndex = $param_noindex ? 'ut:"noindex",' : '';

            $code = '<!-- Yandex.Metrika counter --><script type="text/javascript">(function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter' . $id . ' = new Ya.Metrika({id:' . $id . ', clickmap:' . $clickMap . ', trackLinks:' . $tracklinks . ', accurateTrackBounce:' . $accurateTrackBounce  . ','. $noIndex . ' webvisor:' . $webvisor . '}); } catch(e) {} }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f); } else { f(); } })(document, window, "yandex_metrika_callbacks");</script><noscript><div><img src="//mc.yandex.ru/watch/' . $id . '" style="position:absolute; left:-9999px;" alt="" /></div></noscript><!-- /Yandex.Metrika counter -->';
            return $code;
        }
        else return '';
    }

    public function getGoogleAnalytics(){
        return $this->_params->get('googleanalytics_code');
    }

    public function isFrontpage(){
        $menu = JFactory::getApplication()->getMenu();
        $active_menu = $menu->getActive();
        $default_menu = $menu->getDefault();
        $class = ($active_menu->id == $default_menu->id) ? 'frontpage' : 'not-frontpage';
        return $class;
    }
}

?>
