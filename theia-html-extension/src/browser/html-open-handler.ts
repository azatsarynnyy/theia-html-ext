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
import URI from '@theia/core/lib/common/uri';
import { WidgetOpenHandler } from '@theia/core/lib/browser';
import { HtmlUri } from './html-uri';
import { HtmlWidgetOptions } from './html-widget-factory';
import { HtmlWidget } from './html-widget';

@injectable()
export class HtmlOpenHandler extends WidgetOpenHandler<HtmlWidget> {

    readonly id = HtmlUri.scheme;

    canHandle(uri: URI): number {
        try {
            HtmlUri.toHtmlContent(uri);
            return 500;
        } catch {
            return 0;
        }
    }

    protected createWidgetOptions(uri: URI): HtmlWidgetOptions {
        return {
            htmlString: HtmlUri.toHtmlContent(uri)
        };
    }
}
