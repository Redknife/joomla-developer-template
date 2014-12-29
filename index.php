<?php defined('_JEXEC') or die;
require_once(JPATH_THEMES.'/blank_j3/_php/blank_j3.php');
JHtmlBootstrap::loadCss(false);
$params = $this->params;

$doc = JFactory::getDocument();

$doc->addStyleSheet('templates/blank_j3/public/css/styles.css');
$doc->addScript('templates/blank_j3/public/js/app.js');

$blankj3_helper = new blank_j3($this);
?>

<!DOCTYPE html>
<html dir="<?php echo $this->direction; ?>" lang="<?php echo $this->language; ?>" >
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">

        <?php if ($params->get('enable_full_bootstrap', 0)): ?>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        <?php endif; ?>

        <?php if ($params->get('googleFontName', '')): ?>
        <link href='//fonts.googleapis.com/css?family=<?php echo $params->get('googleFontName'); ?>' rel='stylesheet' type='text/css' />
        <?php endif; ?>

        <jdoc:include type="headj3" />

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
    <body class="<?php echo $blankj3_helper->isFrontpage(); ?>">

        <?php if($blankj3_helper->show_top || $blankj3_helper->show_top_left || $blankj3_helper->show_center || $blankj3_helper->show_right): ?>
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
                        <div class="<?php echo $blankj3_helper->class_top_left; ?>">
                            <div class="top-left-modules-wrapper">
                                <jdoc:include type="modules" name="top-left" />
                            </div>
                        </div>
                        <?php endif; ?>

                        <?php if($blankj3_helper->show_top_center): ?>
                        <div class="<?php echo $blankj3_helper->class_top_center; ?>">
                            <div class="top-center-modules-wrapper">
                                <jdoc:include type="modules" name="top-center" />
                            </div>
                        </div>
                        <?php endif; ?>

                        <?php if($blankj3_helper->show_top_right): ?>
                        <div class="<?php echo $blankj3_helper->class_top_right; ?>">
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
        <section id="user1" class="<?php echo $blankj3_helper->class_user1; ?>">
            <div class="container">
                <div class="user1-modules-wrapper">
                    <jdoc:include type="modules" name="user1" style="none"/>
                </div>
            </div>
        </section>
        <?php endif; ?>

        <?php if($blankj3_helper->show_user2): ?>
        <section id="user2" class="<?php echo $blankj3_helper->class_user2; ?>">
            <div class="container">
                <div class="user2-modules-wrapper">
                    <jdoc:include type="modules" name="user2" />
                </div>
            </div>
        </section>
        <?php endif; ?>

        <?php if($blankj3_helper->show_user3): ?>
        <section id="user3" class="<?php echo $blankj3_helper->class_user3; ?>">
            <div class="container">
                <div class="user3-modules-wrapper">
                    <jdoc:include type="modules" name="user3" />
                </div>
            </div>
        </section>
        <?php endif; ?>

        <main>
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <section id="messages">
                            <jdoc:include type="message" />
                        </section>
                    </div>

                    <?php if($blankj3_helper->show_left): ?>
                    <div class="<?php echo $blankj3_helper->class_left; ?>">
                        <section id="left">
                            <jdoc:include type="modules" name="left" />
                        </section>
                    </div>
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
                    <div class="<?php echo $blankj3_helper->class_right; ?>">
                        <section id="right">
                            <jdoc:include type="modules" name="right" />
                        </section>
                    </div>
                    <?php endif; ?>
                </div>
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
