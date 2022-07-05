import React from 'react'

export default function Spinner({ loading }) {
    return loading === false && typeof loading === 'boolean' ? '' : (
        <div className="loadingio-spinner-bricks-w8m3nfrwhk"><div className="ldio-ru285r91r8">
            <div></div><div></div><div></div>
        </div></div>

    )
}