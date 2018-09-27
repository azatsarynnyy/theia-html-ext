/*********************************************************************
 * Copyright (c) 2018 Red Hat, Inc.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 **********************************************************************/

import URI from '@theia/core/lib/common/uri';

export namespace HtmlUri {

    export const scheme = 'my-html';

    export function toUri(htmlContent: string): URI {
        return new URI('').withScheme(scheme).withFragment(htmlContent);
    }

    export function toHtmlContent(uri: URI): string {
        if (uri.scheme === scheme) {
            return uri.fragment;
        }
        throw new Error('The given uri is not an html URI, uri: ' + uri);
    }
}
