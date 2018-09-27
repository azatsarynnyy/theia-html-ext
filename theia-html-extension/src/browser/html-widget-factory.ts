/*********************************************************************
 * Copyright (c) 2018 Red Hat, Inc.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 **********************************************************************/

import { injectable } from 'inversify';
import { WidgetFactory } from '@theia/core/lib/browser';
import { HtmlUri } from './html-uri';
import { HtmlWidget } from './html-widget';

export class HtmlWidgetOptions {
    readonly htmlString: string;
}

@injectable()
export class HtmlWidgetFactory implements WidgetFactory {

    readonly id = HtmlUri.scheme;

    async createWidget(options: HtmlWidgetOptions): Promise<HtmlWidget> {
        const widget = new HtmlWidget(options.htmlString);
        widget.id = 'my-html1';
        widget.title.closable = true;
        widget.title.label = 'html content';
        // widget.title.iconClass = 'fa fa-puzzle-piece';
        return widget;
    }
}
