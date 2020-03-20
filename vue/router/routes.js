// _varname to avoid polluting the variable name space

import Cookies from 'js-cookie';
import _widgets from '../widgets/widgets.json';

let _userWidgets = Cookies.getJSON('user').widgets;

_widgets.filter((widget) => {
    return _userWidgets.includes(widget);
});

_widgets.map((widget) => {
    widget.path = '/' + widget.slug;
    widget.component = () => import(`../widgets/${widget.name}/${widget.name}`);
    widget.meta = widget.options;
    widget.meta.name = widget.title;
    widget.meta.slug = widget.slug;

    delete widget.slug;
    delete widget.options;
    delete widget.title;

    return widget;
});

export default _widgets;