<?php defined( '_JEXEC' ) or die( 'Restricted access');

// Getting params from template
$params = JFactory::getApplication()->getTemplate(true)->params;

$app = JFactory::getApplication();
$doc = JFactory::getDocument();
$this->language = $doc->language;
$this->direction = $doc->direction;

// Detecting Active Variables
$option   = $app->input->getCmd('option', '');
$view     = $app->input->getCmd('view', '');
$layout   = $app->input->getCmd('layout', '');
$task     = $app->input->getCmd('task', '');
$itemid   = $app->input->getCmd('Itemid', '');
$sitename = $app->get('sitename');

JHtml::_('bootstrap.framework');

// Add current user information
$user = JFactory::getUser();

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" dir="<?php echo $this->direction; ?>">
	<head>
        <title><?php echo $this->error->getCode(); ?> - <?php echo htmlspecialchars($this->error->getMessage(), ENT_QUOTES, 'UTF-8'); ?></title>
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<meta name="language" content="<?php echo $this->language; ?>" />
		<link rel="stylesheet" href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/public/styles.css" type="text/css" />
        <?php if ($this->direction == 'rtl') : ?>
            <link rel="stylesheet" href="<?php echo $this->baseurl; ?>/templates/system/css/error_rtl.css" type="text/css" />
        <?php endif; ?>
        <?php if ($app->get('debug_lang', '0') == '1' || $app->get('debug', '0') == '1') : ?>
            <link rel="stylesheet" href="<?php echo $this->baseurl ?>/media/cms/css/debug.css" type="text/css" />
        <?php endif; ?>
        <style type="text/css">
            body {
                font-size: 14px;
            }

            h1{
                font-size: 2em;
                margin: 2em 0;
            }

            ul{
                list-style: none;
                margin: 1.5em 2em;
            }

            ul > li{
                line-height: 1.5em;
            }

            .techinfo{
                margin-top: 2em;
                font-size: 0.85em;
                background: #eee;
                border: 1px solid #ccc;
                padding: 20px;
                position: relative;
            }

            .techinfo:before{
                content: 'Info:';
                background: #fff;
                padding: 4px 10px;
                border: 1px solid #ccc;
                position: absolute;
                top: -1px;
                left: -1px;
            }
        </style>
	</head>
	<body>
		<div class="container">
			<?php
				$document = JFactory::getDocument();
				if ($document->countModules( 'error404' )):
					$renderer = $document->loadRenderer('modules');
					$options = array('style' => 'xhtml');
					$position = 'error404';
					echo $renderer->render($position, $options, null);
				else:
			?>
				<!-- Begin Content -->
				<h1 class="page-header"><?php echo htmlspecialchars($this->error->getMessage(), ENT_QUOTES, 'UTF-8'); ?></h1>
                    <p><strong><?php echo JText::_('JERROR_LAYOUT_ERROR_HAS_OCCURRED_WHILE_PROCESSING_YOUR_REQUEST'); ?></strong></p>
                    <p><?php echo JText::_('JERROR_LAYOUT_NOT_ABLE_TO_VISIT'); ?></p>
                    <ul>
                        <li><?php echo JText::_('JERROR_LAYOUT_AN_OUT_OF_DATE_BOOKMARK_FAVOURITE'); ?></li>
                        <li><?php echo JText::_('JERROR_LAYOUT_MIS_TYPED_ADDRESS'); ?></li>
                        <li><?php echo JText::_('JERROR_LAYOUT_SEARCH_ENGINE_OUT_OF_DATE_LISTING'); ?></li>
                        <li><?php echo JText::_('JERROR_LAYOUT_YOU_HAVE_NO_ACCESS_TO_THIS_PAGE'); ?></li>
                    </ul>
                    <?php if (JModuleHelper::getModule('search')) : ?>
                        <p><strong><?php echo JText::_('JERROR_LAYOUT_SEARCH'); ?></strong></p>
                        <p><?php echo JText::_('JERROR_LAYOUT_SEARCH_PAGE'); ?></p>
                        <?php
                            $module = JModuleHelper::getModule('search');
                            echo JModuleHelper::renderModule($module);
                        ?>
                    <?php endif; ?>
                    <p><?php echo JText::_('JERROR_LAYOUT_GO_TO_THE_HOME_PAGE'); ?></p>
                    <ul>
                        <li><a href="<?php echo $this->baseurl; ?>/index.php" title="<?php echo JText::_('JERROR_LAYOUT_GO_TO_THE_HOME_PAGE'); ?>"><?php echo JText::_('JERROR_LAYOUT_HOME_PAGE'); ?></a></li>
                    </ul>
                    <p><?php echo JText::_('JERROR_LAYOUT_PLEASE_CONTACT_THE_SYSTEM_ADMINISTRATOR'); ?></p>
                    <pre class="techinfo">
                        <p><?php echo htmlspecialchars($this->error->getMessage(), ENT_QUOTES, 'UTF-8'); ?></p>
						<?php if ($this->debug) : ?>
                            <div>
								<?php echo $this->renderBacktrace(); ?>
								<?php // Check if there are more Exceptions and render their data as well ?>
								<?php if ($this->error->getPrevious()) : ?>
									<?php $loop = true; ?>
									<?php // Reference $this->_error here and in the loop as setError() assigns errors to this property and we need this for the backtrace to work correctly ?>
									<?php // Make the first assignment to setError() outside the loop so the loop does not skip Exceptions ?>
									<?php $this->setError($this->_error->getPrevious()); ?>
									<?php while ($loop === true) : ?>
                                        <p><strong><?php echo JText::_('JERROR_LAYOUT_PREVIOUS_ERROR'); ?></strong></p>
                                        <p><?php echo htmlspecialchars($this->_error->getMessage(), ENT_QUOTES, 'UTF-8'); ?></p>
										<?php echo $this->renderBacktrace(); ?>
										<?php $loop = $this->setError($this->_error->getPrevious()); ?>
									<?php endwhile; ?>
									<?php // Reset the main error object to the base error ?>
									<?php $this->setError($this->error); ?>
								<?php endif; ?>
                            </div>
						<?php endif; ?>
                    </pre>
                <!-- End Content -->
			<?php endif; ?>
		</div>
	</body>
</html>
