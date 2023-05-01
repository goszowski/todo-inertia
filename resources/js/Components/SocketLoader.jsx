import React, { useEffect, useState } from "react";
import { router } from "@inertiajs/react";

const SocketLoader = ({ channel, event, children }) => {
    const [showReloadButton, setShowReloadButton] = useState(false);

    useEffect(() => {
        // Echo лежить у window. 
        // Як тільки прилітає повідомлення по сокету, то виконується функція reload.
        Echo.private(channel).listen(event, reload);

        // Fallback: якшо вебсокет не спрацював, то показується кнопка для перезавантаження сторінки
        setTimeout(() => {
            setShowReloadButton(true);
        }, 10000);
    }, []);

    const reload = () => {
        // Оновлення через inertia router
        router.reload();
    };

    return (
        <div className="text-center">
            <div>{children}</div>
            {showReloadButton && (
                <div>
                    <button type="button" className="btn btn-primary" onClick={reload}>
                        Reload Page
                    </button>
                </div>
            )}
        </div>
    );
};

export default SocketLoader;
