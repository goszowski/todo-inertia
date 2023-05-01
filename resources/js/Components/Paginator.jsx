import { Link } from "@inertiajs/react";
import React from "react";

const Parinator = ({ pagination, children }) => {
    return (
        <>
            {children}
            {pagination.last_page > 1 && (
                <div className="row align-items-center">
                    <div className="col">
                        <Item href={pagination.prev_page_url}>
                            Prev
                        </Item>
                    </div>
                    <div className="col text-center small text-muted">
                        {pagination.current_page}/{pagination.last_page}
                    </div>
                    <div className="col text-end">
                        <Item href={pagination.next_page_url}>
                            Next
                        </Item>
                    </div>
                </div>
            )}
        </>
    );
};

const Item = ({ href, children }) => {
    return (
        <>
            {href ? (
                <Link
                    href={href}
                    className="btn btn-outline-primary btn-sm mx-3"
                >
                    {children}
                </Link>
            ) : (
                <div className="flex justify-center p-3 text-gray-400">
                    {children}
                </div>
            )}
        </>
    );
};

export default Parinator;
