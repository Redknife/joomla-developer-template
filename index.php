<?php defined('_JEXEC') or die;
require_once(JPATH_THEMES.'/blank_j3/_php/blank_j3.php');
JHtmlBootstrap::loadCss(false);
$params = $this->params;

$doc = JFactory::getDocument();

$doc->addStyleSheet('templates/blank_j3/public/css/styles.css');
$doc->addScript('templates/blank_j3/public/js/app.js');

$blankj3_helper = new blank_j3($this);

$app = JFactory::getApplication();
$menu = $app->getMenu()->getActive();
$pageclass = '';

if (is_object($menu)){
    $pageclass = $menu->params->get('pageclass_sfx');
    $pageclass .= ' page__'.$menu->query['option'].'-'.$menu->query['view'];
}
?>

<!DOCTYPE html>
<html dir="<?php echo $this->direction; ?>" lang="<?php echo $this->language; ?>" >
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">

        <!-- <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"> -->

        <jdoc:include type="headj3" />

        <link rel="icon" href="<?php echo JURI::root(); ?>favicon.ico" type="image/x-icon">

        <!--[if lt IE 7]>
            <script src="http://ie7-js.googlecode.com/svn/version/2.1(beta4)/IE7.js"></script>
        <![endif]-->
        <!--[if lt IE 8]>
            <script src="http://ie7-js.googlecode.com/svn/version/2.1(beta4)/IE8.js"></script>
        <![endif]-->
        <!--[if lt IE 9]>
            <script src="http://ie7-js.googlecode.com/svn/version/2.1(beta4)/IE9.js"></script>
            <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->
    </head>
    <body class="<?php echo $blankj3_helper->isFrontpage()." ".$pageclass; ?>">

        <?php if($blankj3_helper->show_top || $blankj3_helper->show_top_left || $blankj3_helper->show_top_center || $blankj3_helper->show_right): ?>
        <header id="site-header">
            <?php if($blankj3_helper->show_top): ?>
            <section id="top">
                <div class="container">
                    <div class="top-modules-wrapper">
                        <jdoc:include type="modules" name="top" />
                    </div>
                </div>
            </section>
            <?php endif; ?>

            <?php if($blankj3_helper->show_top_left || $blankj3_helper->show_top_center || $blankj3_helper->show_top_right): ?>
            <section id="top-blocks">
                <div class="container">
                    <div class="row">
                        <?php if($blankj3_helper->show_top_left): ?>
                        <div class="col-md-4">
                            <div class="top-left-modules-wrapper">
                                <jdoc:include type="modules" name="top-left" />
                            </div>
                        </div>
                        <?php endif; ?>

                        <?php if($blankj3_helper->show_top_center): ?>
                        <div class="col-md-4">
                            <div class="top-center-modules-wrapper">
                                <jdoc:include type="modules" name="top-center" />
                            </div>
                        </div>
                        <?php endif; ?>

                        <?php if($blankj3_helper->show_top_right): ?>
                        <div class="col-md-4">
                            <div class="top-right-modules-wrapper">
                                <jdoc:include type="modules" name="top-right" />
                            </div>
                        </div>
                        <?php endif; ?>
                    </div>
                </div>
            </section>
            <?php endif; ?>
        </header>
        <?php endif; ?>

        <?php if($blankj3_helper->show_user1): ?>
        <section id="user1">
            <div class="container">
                <div class="user1-modules-wrapper">
                    <jdoc:include type="modules" name="user1" style="none"/>
                </div>
            </div>
        </section>
        <?php endif; ?>

        <?php if($blankj3_helper->show_user2): ?>
        <section id="user2">
            <div class="container">
                <div class="user2-modules-wrapper">
                    <jdoc:include type="modules" name="user2" />
                </div>
            </div>
        </section>
        <?php endif; ?>

        <?php if($blankj3_helper->show_user3): ?>
        <section id="user3">
            <div class="container">
                <div class="user3-modules-wrapper">
                    <jdoc:include type="modules" name="user3" />
                </div>
            </div>
        </section>
        <?php endif; ?>

        <main id="contentWrapper">
            <div class="container">

                <section id="messages">
                    <jdoc:include type="message" />
                </section>

                <?php if($blankj3_helper->show_left): ?>
                <section id="left">
                    <jdoc:include type="modules" name="left" />
                </section>
                <?php endif; ?>

                <div class="<?php echo $blankj3_helper->getContentClass(); ?>">
                    <?php if($blankj3_helper->show_content_header): ?>
                    <section id="content-header">
                        <jdoc:include type="modules" name="content-header" />
                    </section>
                    <?php endif; ?>

                    <article id="content">
                        <jdoc:include type="component" />
                    </article>

                    <?php if($blankj3_helper->show_content_footer): ?>
                    <section id="content-footer">
                        <jdoc:include type="modules" name="content-footer" />
                    </section>
                    <?php endif; ?>
                </div>

                <?php if($blankj3_helper->show_right): ?>
                <section id="right">
                    <jdoc:include type="modules" name="right" />
                </section>
                <?php endif; ?>
            </div>
        </main>

        <?php if($blankj3_helper->show_bottom_left || $blankj3_helper->show_bottom_center || $blankj3_helper->show_bottom_right): ?>
        <section id="bottom-blocks">
            <div class="container">
                <div class="row">
                    <?php if($blankj3_helper->show_bottom_left): ?>
                    <div class="<?php echo $blankj3_helper->class_bottom_left; ?>">
                        <div class="bottom-left-modules-wrapper">
                            <jdoc:include type="modules" name="bottom-left" />
                        </div>
                    </div>
                    <?php endif; ?>

                    <?php if($blankj3_helper->show_bottom_center): ?>
                    <div class="<?php echo $blankj3_helper->class_bottom_center; ?>">
                        <div class="bottom-center-modules-wrapper">
                            <jdoc:include type="modules" name="bottom-center" />
                        </div>
                    </div>
                    <?php endif; ?>

                    <?php if($blankj3_helper->show_bottom_right): ?>
                    <div class="<?php echo $blankj3_helper->class_bottom_right; ?>">
                        <div class="bottom-right-modules-wrapper">
                            <jdoc:include type="modules" name="bottom-right" />
                        </div>
                    </div>
                    <?php endif; ?>
                </div>
            </div>
        </section>
        <?php endif; ?>

        <?php if($blankj3_helper->show_bottom): ?>
        <section id="bottom">
            <div class="container">
                <div class="bottom-modules-wrapper">
                    <jdoc:include type="modules" name="bottom" />
                </div>
            </div>
        </section>
        <?php endif; ?>

        <?php if($blankj3_helper->show_bottom_socials): ?>
        <section id="bottom-socials">
            <div class="container">
                <div class="bottom-socials-modules-wrapper">
                    <jdoc:include type="modules" name="bottom-socials" />
                </div>
            </div>
        </section>
        <?php endif; ?>

        <?php if($blankj3_helper->show_footer): ?>
        <footer id="footer">
            <div class="container">
                <div class="footer-modules-wrapper">
                    <jdoc:include type="modules" name="footer" />
                </div>
            </div>
        </footer>
        <?php endif; ?>

        <?php if($params->get('disable_scripts')): ?>
            <jdoc:include type="footj3" />
        <?php endif; ?>

        <!-- Counters -->
        <?php echo $blankj3_helper->getYandexMetrika(); ?>
        <?php echo $blankj3_helper->getGoogleAnalytics(); ?>

    </body>
</html>
