<?php
/**
 * @package     Joomla.Site
 * @subpackage  Template.blank_j3
 *
 * @copyright   Copyright (C) 2005 - 2016 Saity74, LLC. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;

require_once __DIR__ . '/renderer/head_j3.php';
require_once __DIR__ . '/renderer/foot_j3.php';

use Joomla\Utilities\ArrayHelper;

/**
 * Main class for Blank_J3 template
 *
 * @since  1.0
 */
class Blank_J3
{
    /**
     * @var   array  Template params
     */
    protected $tmpl_params;

    /**
     * Construct method
     *
     * @param   JDocumentHTML  $template  Template object
     *
     * @throws Exception
     */
    public function __construct(JDocumentHTML $template)
    {
        if ( ! ($template instanceof JDocumentHTML) )
        {
            return;
        }

        $this->tmpl_params = $template->params;

        $menu = JFactory::getApplication()->getMenu();
        $activeMenu = $menu->getActive();

        // Merge menu params with template params
        $params = array_merge($activeMenu->params->toArray(), $this->tmpl_params->toArray());
        $this->params = ArrayHelper::toObject($params, 'JRegistry');

        require_once JPATH_ADMINISTRATOR . '/components/com_templates/helpers/templates.php';
        $positions = TemplatesHelper::getPositions(false, 'blank_j3');

        // Check for positions
        foreach ($positions as $position)
        {
            $this->{'show_' . $position} = $template->countModules($position);
        }

        $this->show_msg = $template->countModules('message');
    }

    /**
     * Get template assets
     *
     * @return array
     */
    public function get_assets()
    {
        $min_assets = (int) $this->tmpl_params->get('min_assets', 0);
        $assets_path = JURI::base(true) . '/templates/' . JFactory::getApplication()->getTemplate() . '/public/';

        $styles_file = $min_assets ? 'styles.min.css' : 'styles.css';
        $styles_path = $assets_path . $styles_file;

        $scripts_file = $min_assets ? 'app.min.js' : 'app.js';
        $scripts_path = $assets_path . $scripts_file;

        return ['styles' => $styles_path, 'scripts' => $scripts_path];
    }

	/**
	 * Validate favicons data object
	 *
	 * @param $data
	 *
	 * @return bool
	 */
	private function check_fav_data($data)
	{
		if (!is_object($data)) return false;

		// status code
		$status = isset($data->result->status) && $data->result->status == 'success';
		if (!$status) return false;

		// has html_code
		$html_code = isset($data->favicon->html_code) && is_string($data->favicon->html_code);
		if (!$html_code) return false;

		return true;
	}

	/**
	 * Get favicons html code
	 *
	 * @return string
	 */
	public function get_favicons_html()
	{
		$app                = JFactory::getApplication();
		$data_file_rel_path = '/public/favicons/faviconData.json';
		$data_file_abs_path = JPATH_THEMES . '/' . $app->getTemplate() . $data_file_rel_path;
		$result             = '';

		if (file_exists($data_file_abs_path))
		{
			$file_content = file_get_contents($data_file_abs_path);
			$json         = json_decode($file_content);
			if (self::check_fav_data($json))
			{
				$result = $json->favicon->html_code;
			}
		}

		return $result;
	}

    /**
     * Get Yandex.Metrics code
     *
     * @return string
     */
    public function get_ym()
    {
        $id = $this->tmpl_params->get('yandex_metrika_id');
        $code = '';

        if (isset($id))
        {
            $param_webvisor = $this->tmpl_params->get('yandex_metrika_webvisor');
            $param_clickmap = $this->tmpl_params->get('yandex_metrika_clickmap');
            $param_tracklinks = $this->tmpl_params->get('yandex_metrika_tracklinks');
            $param_accuratetrack = $this->tmpl_params->get('yandex_metrika_accuratetrack');
            $param_noindex = $this->tmpl_params->get('yandex_metrika_noindex');

            $webvisor = $param_webvisor ? 'true' : 'false';
            $clickMap = $param_clickmap ? 'true' : 'false';
            $tracklinks = $param_tracklinks ? 'true' : 'false';
            $accurateTrackBounce = $param_accuratetrack ? 'true' : 'false';
            $noIndex = $param_noindex ? 'ut:"noindex",' : '';

            $code = '<!-- Yandex.Metrika counter -->
					<script type="text/javascript">
						(function (d, w, c) { (w[c] = w[c] || []).push(
							function() {
								try {
									w.yaCounter' . $id . ' = new Ya.Metrika({id:' . $id . ', clickmap:' . $clickMap . ', trackLinks:' . $tracklinks . ',
									accurateTrackBounce:' . $accurateTrackBounce  . ','. $noIndex . ' webvisor:' . $webvisor . '});
								} catch(e) {}
							});
							var n = d.getElementsByTagName("script")[0],
								s = d.createElement("script"),
								f = function () { n.parentNode.insertBefore(s, n); };
							s.type = "text/javascript";
							s.async = true;
							s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";
							if (w.opera == "[object Opera]") {
								d.addEventListener("DOMContentLoaded", f);
							} else {
								f();
							}
						})(document, window, "yandex_metrika_callbacks");
					</script>
					<noscript>
						<div><img src="//mc.yandex.ru/watch/' . $id . '" style="position:absolute; left:-9999px;" alt="" /></div>
					</noscript>
					<!-- /Yandex.Metrika counter -->
					';
        }

        return $code;
    }

    /**
     * Get Google Analytics code
     *
     * @return mixed
     */
    public function get_ga()
    {
        return $this->tmpl_params->get('googleanalytics_code');
    }

    /**
     * Check is current page is frontpage
     *
     * @return bool
     */
    public function is_frontpage()
    {
        $menu = JFactory::getApplication()->getMenu();
        $active_menu = $menu->getActive();
        $default_menu = $menu->getDefault();

        return $active_menu->id == $default_menu->id;
    }
}
