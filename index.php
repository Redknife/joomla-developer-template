<?php defined('_JEXEC') or die;
require_once(JPATH_THEMES.'/blank_j3/_php/blank_j3.php');
JHtmlBootstrap::loadCss(false);
$this->setGenerator(null);

$app = JFactory::getApplication();
$doc = JFactory::getDocument();

$params = $this->params;
$tmpl = new blank_j3($this);

$assets = $tmpl->get_assets();

// Add styles..
$doc->addStyleSheet($assets['styles']);

// Add scripts..
$doc->addScript($assets['scripts']);
//$assets_path = JURI::base(true) . '/templates/' . JFactory::getApplication()->getTemplate() . '/public/';
//$doc->addScript('/templates/blank_j3/public/main.93d893078685111e7ca9.js');

$menu = $app->getMenu()->getActive();
$body_class = '';

if (is_object($menu)){
    $body_class = $tmpl->is_frontpage() ? 'g-homepage ' : '';
    $body_class .= $menu->params->get('pageclass_sfx');
    $body_class .= str_replace('_', '-', ' g-j-'.$menu->query['option'].'-'.$menu->query['view']);
}
?>

<!DOCTYPE html>
<html dir="<?php echo $this->direction; ?>" lang="<?php echo $this->language; ?>" >
    <head>
        <jdoc:include type="headj3" />

        <link rel="icon" href="<?php echo JURI::root(); ?>favicon.ico" type="image/x-icon">

        <!--[if lt IE 9]>
	    	<script src="https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.7/es5-shim.min.js"></script>
        <![endif]-->
    </head>
    <body class="<?php echo $body_class; ?>">
        <?php if($tmpl->show_header): ?>
        <header class="l-header">
            <div class="container">
                <jdoc:include type="modules" name="header" style="none"/>
            </div>
        </header>
        <?php endif; ?>

        <?php if($tmpl->show_user1): ?>
        <section class="m-user1">
            <div class="container">
                <jdoc:include type="modules" name="user1" style="none"/>
            </div>
        </section>
        <?php endif; ?>

        <?php if($tmpl->show_user2): ?>
        <section class="m-user2">
            <div class="container">
                <jdoc:include type="modules" name="user2" style="none"/>
            </div>
        </section>
        <?php endif; ?>

        <?php if($tmpl->show_user3): ?>
        <section class="m-user3">
            <div class="container">
                <jdoc:include type="modules" name="user3" style="none"/>
            </div>
        </section>
        <?php endif; ?>

        <section class="l-content">
            <div class="container">

                <?php if($tmpl->show_msg): ?>
                <div class="l-content_notification">
                    <jdoc:include type="message" />
                </div>
                <?php endif; ?>

                <?php if($tmpl->show_content_header): ?>
                <div class="l-content_header">
                    <jdoc:include type="modules" name="content_header" style="none"/>
                </div>
                <?php endif; ?>

                <main class="l-component">
                    <jdoc:include type="component" />
                </main>

                <?php if($tmpl->show_content_footer): ?>
                <div class="l-content_footer">
                    <jdoc:include type="modules" name="content_footer" style="none"/>
                </div>
                <?php endif; ?>

            </div>
        </section>

        <?php if($tmpl->show_bottom): ?>
        <section class="m-bottom">
            <div class="container">
                <jdoc:include type="modules" name="bottom" style="none"/>
            </div>
        </section>
        <?php endif; ?>

        <?php if($tmpl->show_footer): ?>
        <footer class="l-footer">
            <div class="container">
                <jdoc:include type="modules" name="footer" style="none"/>
            </div>
        </footer>
        <?php endif; ?>

        <?php if($params->get('disable_scripts')): ?>
            <jdoc:include type="footj3" />
        <?php endif; ?>

        <div class="container">
            <button class="js-btn">Test</button>

	        <div id="container">
		        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias ea eos in ipsa minus nihil quia, quisquam rem totam. Amet consequuntur dolorem excepturi nam non perferendis praesentium quod, ut.</p>
	        </div>
        </div>

        <?php echo $tmpl->get_ym(); ?>
        <?php echo $tmpl->get_ga(); ?>

    </body>
</html>
