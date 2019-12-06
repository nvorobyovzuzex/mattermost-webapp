// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

import LocalizedIcon from 'components/localized_icon';

type Props = {
    additionalClassName: string | null;
}

export default class PreviousIcon extends React.PureComponent<Props> {
    public static defaultProps: Props = {
        additionalClassName: null,
    };

    public render(): JSX.Element {
        const className = 'fa fa-1x fa-angle-left' + (this.props.additionalClassName ? ' ' + this.props.additionalClassName : '');
        return (
            <LocalizedIcon
                className={className}
                title={{id: 'generic_icons.previous', defaultMessage: 'Previous Icon'}}
            />
        );
    }
}
