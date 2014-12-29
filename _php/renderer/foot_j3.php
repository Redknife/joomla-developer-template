<?php
/**
 * @package     Joomla.Platform
 * @subpackage  Document
 *
 * @copyright   Copyright (C) 2005 - 2014 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE
 */

defined('JPATH_PLATFORM') or die;

/**
 * JDocument head renderer
 *
 * @package     Joomla.Platform
 * @subpackage  Document
 * @since       11.1
 */
class JDocumentRendererFootJ3 extends JDocumentRenderer
{
	/**
	 * Renders the document head and returns the results as a string
	 *
	 * @param   string  $head     (unused)
	 * @param   array   $params   Associative array of values
	 * @param   string  $content  The script
	 *
	 * @return  string  The output of the script
	 *
	 * @since   11.1
	 *
	 * @note    Unused arguments are retained to preserve backward compatibility.
	 */
	public function render($head, $params = array(), $content = null)
	{
		return $this->fetchScripts($this->_doc);
	}

	/**
	 * Generates the head HTML and return the results as a string
	 *
	 * @param   JDocument  $document  The document for which the head will be created
	 *
	 * @return  string  The head hTML
	 *
	 * @since   11.1
	 */
	public function fetchScripts($document)
	{

		// Trigger the onBeforeCompileHead event
		$app = JFactory::getApplication();


		// Get line endings
		$lnEnd = $document->_getLineEnd();
		$tab = $document->_getTab();
		$tagEnd = ' />';
		$buffer = '';

		if ($disabled_scripts_list = $document->params->get('disabled_scripts_list', ''))
		{
			$disable_scripts = preg_split("#\n".'|'."\r\n#", $disabled_scripts_list);
		}

		// Generate script file links
		foreach ($document->_scripts as $strSrc => $strAttr)
		{

			if (!in_array($strSrc, $disable_scripts))
			{

				$buffer .= $tab . '<script src="' . $strSrc . '"';
				$defaultMimes = array(
					'text/javascript', 'application/javascript', 'text/x-javascript', 'application/x-javascript'
				);

				if (!is_null($strAttr['mime']) && (!$document->isHtml5() || !in_array($strAttr['mime'], $defaultMimes)))
				{
					$buffer .= ' type="' . $strAttr['mime'] . '"';
				}

				if ($strAttr['defer'])
				{
					$buffer .= ' defer="defer"';
				}

				if ($strAttr['async'])
				{
					$buffer .= ' async="async"';
				}

				$buffer .= '></script>' . $lnEnd;
			}
		}

        if(!$document->params->get('disable_inline_scripts', 1)){
    		// Generate script declarations
    		foreach ($document->_script as $type => $content)
    		{

    			$buffer .= $tab . '<script type="' . $type . '">' . $lnEnd;

    			// This is for full XHTML support.
    			if ($document->_mime != 'text/html')
    			{
    				$buffer .= $tab . $tab . '<![CDATA[' . $lnEnd;
    			}

    			$buffer .= $content . $lnEnd;

    			// See above note
    			if ($document->_mime != 'text/html')
    			{
    				$buffer .= $tab . $tab . ']]>' . $lnEnd;
    			}
    			$buffer .= $tab . '</script>' . $lnEnd;
    		}

    		// Generate script language declarations.
    		if (count(JText::script()))
    		{
    			$buffer .= $tab . '<script type="text/javascript">' . $lnEnd;
    			$buffer .= $tab . $tab . '(function() {' . $lnEnd;
    			$buffer .= $tab . $tab . $tab . 'var strings = ' . json_encode(JText::script()) . ';' . $lnEnd;
    			$buffer .= $tab . $tab . $tab . 'if (typeof Joomla == \'undefined\') {' . $lnEnd;
    			$buffer .= $tab . $tab . $tab . $tab . 'Joomla = {};' . $lnEnd;
    			$buffer .= $tab . $tab . $tab . $tab . 'Joomla.JText = strings;' . $lnEnd;
    			$buffer .= $tab . $tab . $tab . '}' . $lnEnd;
    			$buffer .= $tab . $tab . $tab . 'else {' . $lnEnd;
    			$buffer .= $tab . $tab . $tab . $tab . 'Joomla.JText.load(strings);' . $lnEnd;
    			$buffer .= $tab . $tab . $tab . '}' . $lnEnd;
    			$buffer .= $tab . $tab . '})();' . $lnEnd;
    			$buffer .= $tab . '</script>' . $lnEnd;
    		}

        }
		return $buffer;
	}
}
