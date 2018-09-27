/*********************************************************************
 * Copyright (c) 2018 Red Hat, Inc.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 **********************************************************************/

import { injectable, inject } from 'inversify';
import { CommonMenus, OpenerService, open } from '@theia/core/lib/browser';
import { CommandContribution, Command, CommandRegistry, MenuContribution, MenuModelRegistry } from '@theia/core/lib/common';
import URI from '@theia/core/lib/common/uri';

const content = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
        </head>
        <body>
            <button>click me</button>
            <i>italic</i>
        </body>
        </html>
        `;

export namespace HtmlCommands {
    export const HTML_RENDER: Command = {
        id: 'html:render',
        label: 'Render HTML'
    };
}

@injectable()
export class HtmlFrontendContribution implements CommandContribution, MenuContribution {

    @inject(OpenerService)
    protected readonly openerService: OpenerService;

    registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(
            HtmlCommands.HTML_RENDER,
            {
                execute: () => this.renderHtml(content)
            }
        );
    }

    renderHtml(htmlString: string): void {
        open(this.openerService, new URI('').withScheme('my-html').withFragment(content));
    }

    registerMenus(menus: MenuModelRegistry): void {
        menus.registerMenuAction(CommonMenus.HELP, {
            commandId: HtmlCommands.HTML_RENDER.id,
            label: HtmlCommands.HTML_RENDER.label
        });
    }
}
