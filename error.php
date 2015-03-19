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
$sitename = $app->getCfg('sitename');

JHtml::_('bootstrap.framework');

// Add current user information
$user = JFactory::getUser();

?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" dir="<?php echo $this->direction; ?>">
	<head>
		<title><?php echo $this->title; ?></title>
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<meta name="language" content="<?php echo $this->language; ?>" />
		<link rel="stylesheet" href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/public/css/styles.css" type="text/css" />
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
				<h1 class="page-header" style="margin-top: 2em;"><?php echo JText::_('JERROR_LAYOUT_PAGE_NOT_FOUND'); ?></h1>
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
						<p><a href="<?php echo $this->baseurl; ?>/." class="btn"><i class="icon-home"></i> <?php echo JText::_('JERROR_LAYOUT_HOME_PAGE'); ?></a></p>
				<!-- End Content -->
			<?php endif; ?>
		</div>
	</body>
</html>
