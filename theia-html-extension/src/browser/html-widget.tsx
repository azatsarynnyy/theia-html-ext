/*********************************************************************
 * Copyright (c) 2018 Red Hat, Inc.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 **********************************************************************/

import { ReactWidget } from '@theia/core/lib/browser/widgets/react-widget';
import * as React from 'react';

export class HtmlWidget extends ReactWidget {

    constructor(protected readonly htmlString: string) {
        super();
        this.update();
    }

    protected render(): React.ReactNode {
        return <React.Fragment>
            <iframe srcDoc={this.htmlString}></iframe>
        </React.Fragment>;
    }
}
