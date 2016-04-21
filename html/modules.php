<?php
function modChrome_slider($module, $params, $attribs)
{

    $wrapperClass = htmlspecialchars($params->get('myslider'));

    $html = '';

    if (!empty ($module->content)) {

        $html .= '<div class="mod-slider-wrapper ' . $wrapperClass . '">';
        $html .= '<div class="viewport">';
        $html .= '<ul class="overview unstyled">';

        $html .= $module->content;

        $html .= '</ul>';
        $html .= '</div>';
        $html .= '</div>';

    }

    echo $html;
}

function modChrome_default($module, &$params, &$attribs)
{
    $moduleTag = $params->get('module_tag', 'div');
    $bootstrapSize = (int)$params->get('bootstrap_size', 0);
    $moduleClass = $bootstrapSize != 0 ? ' span' . $bootstrapSize : '';
    $headerTag = htmlspecialchars($params->get('header_tag', 'h3'));
    $headerClass = htmlspecialchars($params->get('header_class', 'page-header'));

    if ($module->content) {
        echo '<' . $moduleTag . ' class="' . htmlspecialchars($params->get('moduleclass_sfx')) . $moduleClass . '">';

        if ($module->showtitle) {
            echo '<' . $headerTag . ' class="' . $headerClass . '">' . $module->title . '</' . $headerTag . '>';
        }

        echo $module->content;
        echo '</' . $moduleTag . '>';
    }
}

function modChrome_menu($module, &$params, &$attribs)
{
    $moduleTag = $params->get('module_tag', 'div');
    $bootstrapSize = (int)$params->get('bootstrap_size', 0);
    $moduleClass = $bootstrapSize != 0 ? ' span' . $bootstrapSize : '';
    $headerTag = htmlspecialchars($params->get('header_tag', 'h3'));
    $headerClass = htmlspecialchars($params->get('header_class', 'page-header'));
    $menuID = htmlspecialchars($params->get('tag_id', 'navbar-collapse'));

    if ($module->content) {
        echo '<' . $moduleTag . ' class="' . htmlspecialchars($params->get('moduleclass_sfx')) . $moduleClass . '">';

        if ($module->showtitle) {
            echo '<' . $headerTag . ' class="' . $headerClass . '">' . $module->title . '</' . $headerTag . '>';
        }

        echo '<div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#' . $menuID . '">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
          </div>';

        echo '<div class="collapse navbar-collapse" id="' . $menuID . '">';
        echo $module->content;
        echo '</div>';
        echo '</' . $moduleTag . '>';
    }
}

function modChrome_bootstrap($module, &$params, &$attribs)
{

    $moduleTag = $params->get('module_tag', 'div');
    $bootstrapSize = (int)$params->get('bootstrap_size', 0);
    $headerTag = htmlspecialchars($params->get('header_tag', 'h3'));
    $headerClass = htmlspecialchars($params->get('header_class', 'module-header'));

    if ($module->content) {
        echo '<div class="col-lg-' . $bootstrapSize . ' col-md-' . $bootstrapSize . ' col-sm-12 col-xs-12">';

        echo '<' . $moduleTag . ' class="' . $module->position . '-module-wrapper ' . htmlspecialchars($params->get('moduleclass_sfx')) . '">';

        if ($module->showtitle) {
            echo '<' . $headerTag . ' class="' . $headerClass . '">' . $module->title . '</' . $headerTag . '>';
        }

        echo $module->content;
        echo '</div>';

        echo '</' . $moduleTag . '>';
    }

}

function modChrome_bootstrap_wrap($module, &$params, &$attribs)
{

    $moduleTag = $params->get('module_tag', 'div');
    $bootstrapSize = (int)$params->get('bootstrap_size', 0);
    $headerTag = htmlspecialchars($params->get('header_tag', 'h3'));
    $headerClass = htmlspecialchars($params->get('header_class', 'module-header'));

    if ($module->content) {
        echo '<div class="container">';
        echo '<div class="row">';
        echo '<div class="col-lg-' . $bootstrapSize . ' col-md-' . $bootstrapSize . ' col-sm-12 col-xs-12">';

        echo '<' . $moduleTag . ' class="' . $module->position . '-module-wrapper ' . htmlspecialchars($params->get('moduleclass_sfx')) . '">';

        if ($module->showtitle) {
            echo '<' . $headerTag . ' class="' . $headerClass . '">' . $module->title . '</' . $headerTag . '>';
        }

        echo $module->content;
        echo '</div>';
        echo '</div>';
        echo '</div>';

        echo '</' . $moduleTag . '>';
    }

}

function modChrome_modal($module, &$params, &$attribs)
{

    $moduleTag = $params->get('module_tag', 'div');
    $headerTag = htmlspecialchars($params->get('header_tag', 'h3'));
    $headerClass = htmlspecialchars($params->get('header_class', 'module-header'));
    $bootstrapSize = (int)$params->get('bootstrap_size', 0);
    $modalId = implode('_', [$module->name, $module->id]);
    $btnCaption = $module->title;
    $modalHead = $module->title;

    if (strpos($btnCaption, '|') !== 0) {
        list($btnCaption, $modalHead) = explode('|', $btnCaption);
    }
    // if bootstrap size then create bootstrap container with col-
    if ($bootstrapSize) {
        echo '<div class="col-lg-' . $bootstrapSize . ' col-md-' . $bootstrapSize . ' col-sm-12 col-xs-12">';
        echo '      <a data-toggle="modal" data-target="#' . $modalId . '" class="modal-btn-jsend bordered-btn">' . $btnCaption . '</a>';
        echo '</div>';
    } else {
        echo '<a data-toggle="modal" data-target="#' . $modalId . '" class="modal-btn-jsend bordered-btn">' . $btnCaption . '</a>';
    }

    if ($module->content) {
        $html[] = '<div class="modal fade" id="' . $modalId . '" tabindex="-1" role="dialog">';
        $html[] = '    <div class="modal-dialog modal-md modal-lg">';
        $html[] = '        <div class="modal-content">';
        $html[] = '            <div class="modal-header">';
        if ($module->showtitle) {
            $html[] = '<' . $headerTag . ' class="' . $headerClass . '">' . $modalHead . '</' . $headerTag . '>';
        }
        $html[] = '                <a href="#" class="close" data-dismiss="modal" aria-hidden="true">×</a>';
        $html[] = '            </div>';
        $html[] = '            <div class="modal-body">';
        $html[] = '                <' . $moduleTag . ' class="' . $module->position . '-module-wrapper ' . htmlspecialchars($params->get('moduleclass_sfx')) . '">';
        $html[] = $module->content;
        $html[] = '                </' . $moduleTag . '>';
        $html[] = '            </div>';
        $html[] = '        </div>';
        $html[] = '    </div>';
        $html[] = '</div>';

        $content = implode("\n", $html);

        $doc = JFactory::getDocument();


        $new_module = clone $module;
        $new_module->position = 'modal';
        $new_module->style = 'none';


        $buffer = $doc->getBuffer();
        $options = [
            'type' => 'modal',
            'name' => '',
            'title' => ''
        ];

        if (is_array($buffer) && isset($buffer['modal'])) {
            $content = $buffer['modal'][''][''] . $content;
        }

        $doc->setBuffer($content, $options);
    }

}
