'use strict';

function MessageHistory({list}) {
    if (!list || !Array.isArray(list) || list.length === 0) {
        return null;
    }

    const messageHistoryTypes = {
        message: Message,
        response: Response,
        typing: Typing
    };

    const messages = list.map(item => {
        const MessageHistoryItem = messageHistoryTypes[item.type];
        return <MessageHistoryItem key={item.id} from={item.from} message={item} />
    });

    return (
        <ul>
            {messages}
        </ul>
    );
}

MessageHistory.defaultProps = {
    list: []
};