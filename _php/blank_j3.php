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

        // size blocks
        $this->class_top_left = $this->_params->get('top_left_class', 'col-xs-12 col-sm-4 col-md-4 col-lg-4');
        $this->class_top_center = $this->_params->get('top_center_class', 'col-xs-12 col-sm-4 col-md-4 col-lg-4');
        $this->class_top_right = $this->_params->get('top_right_class', 'col-xs-12 col-sm-4 col-md-4 col-lg-4');

        $this->class_left = $this->_params->get('left_class', 'col-xs-12 col-sm-3 col-md-3 col-lg-3');
        $this->class_right = $this->_params->get('right_class', 'hidden-xs col-sm-2 col-md-2 col-lg-2');

        $this->class_bottom_left = $this->_params->get('bottom_left_class', 'col-xs-12 col-sm-4 col-md-4 col-lg-4');
        $this->class_bottom_center = $this->_params->get('bottom_center_class', 'col-xs-12 col-sm-4 col-md-4 col-lg-4');
        $this->class_bottom_right = $this->_params->get('bottom_right_class', 'col-xs-12 col-sm-4 col-md-4 col-lg-4');

        //classes for blocks
        $this->class_user1 = $this->_params->get('user1_class', '');
        $this->class_user2 = $this->_params->get('user2_class', '');
        $this->class_user3 = $this->_params->get('user3_class', '');
    }

    public function getContentClass()
    {
        if($this->show_left)
        {
            $class_left = $this->_params->get('left_class', 'col-xs-12 col-sm-3 col-md-3 col-lg-3');
        }
        else
        {
            $class_left = 'col-xs-0 col-sm-0 col-md-0 col-lg-0';
        }

        if($this->show_right)
        {
            $class_right = $this->_params->get('right_class', 'hidden-xs col-sm-2 col-md-2 col-lg-2');
        }
        else
        {
            $class_right = 'col-xs-0 col-sm-0 col-md-0 col-lg-0';
        }

        $max_grid_size = 12;

        $left_classes = explode(' ', $class_left);
        $right_classes = explode(' ', $class_right);
        $left_class_assoc = array();
        $right_class_assoc = array();
        $content_classes = array();

        foreach ($left_classes as $str)
        {
            $t_arr = preg_split('/-+(?=\\d{1,2})/', $str, 2);
            if(count($t_arr) == 2)
            {
                list($grid_class, $size) = $t_arr;
                $left_class_assoc[$grid_class] = (int) $size;
            }
        }

        foreach ($right_classes as $str)
        {
            $t_arr = preg_split('/-+(?=\\d{1,2})/', $str, 2);
            if(count($t_arr) == 2)
            {
                list($grid_class, $size) = $t_arr;
                $right_class_assoc[$grid_class] = (int) $size;
            }
        }

        $left_class_assoc = array_intersect_key($left_class_assoc, $right_class_assoc);
        foreach ($left_class_assoc as $grid_class => $size) {
            $content_size = abs($max_grid_size - $left_class_assoc[$grid_class] - $right_class_assoc[$grid_class]);
            if($content_size>0) $content_classes[] = $grid_class.'-'.$content_size;
            else $content_classes[] = $grid_class.'-'.$max_grid_size;
        }

        $content_class = implode(' ',$content_classes);
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
