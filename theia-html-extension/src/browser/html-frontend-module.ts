/*********************************************************************
 * Copyright (c) 2018 Red Hat, Inc.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 **********************************************************************/

import { ContainerModule } from 'inversify';
import { CommandContribution, MenuContribution } from '@theia/core';
import { WidgetFactory, OpenHandler } from '@theia/core/lib/browser';
import { HtmlWidgetFactory } from './html-widget-factory';
import { HtmlOpenHandler } from './html-open-handler';
import { HtmlFrontendContribution } from './html-frontend-contribution';

export default new ContainerModule(bind => {
    bind(HtmlFrontendContribution).toSelf().inSingletonScope();
    for (const identifier of [CommandContribution, MenuContribution]) {
        bind(identifier).toService(HtmlFrontendContribution);
    }

    bind(HtmlWidgetFactory).toSelf().inSingletonScope();
    bind(WidgetFactory).toService(HtmlWidgetFactory);

    bind(HtmlOpenHandler).toSelf().inSingletonScope();
    bind(OpenHandler).toService(HtmlOpenHandler);
});
