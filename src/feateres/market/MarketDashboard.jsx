import React from 'react'

function MarketDashboard() {
    return (
        <div className="min-h-screen bg-slate-950 text-white p-6">

            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold">Trading Dashboard</h1>
                    <p className="text-sm text-slate-400">
                        Real-time market data
                    </p>
                </div>

                <div className="rounded-lg bg-slate-900 px-4 py-2">
                    BTCUSDT
                </div>
            </div>

            {/* Price Cards */}
            <div className="mb-6 grid gap-4 md:grid-cols-4">

                <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                    <p className="text-sm text-slate-400">Current Price</p>
                    <h2 className="mt-2 text-2xl font-bold">
                        $86,000.00
                    </h2>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                    <p className="text-sm text-slate-400">24h High</p>
                    <h2 className="mt-2 text-2xl font-bold">
                        $86,500.00
                    </h2>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                    <p className="text-sm text-slate-400">24h Low</p>
                    <h2 className="mt-2 text-2xl font-bold">
                        $84,900.00
                    </h2>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                    <p className="text-sm text-slate-400">24h Change</p>
                    <h2 className="mt-2 text-2xl font-bold text-green-400">
                        +2.35%
                    </h2>
                </div>

            </div>

            {/* Main Area */}
            <div className="grid gap-6 lg:grid-cols-3">

                {/* Chart */}
                <div className="lg:col-span-2 rounded-xl border border-slate-800 bg-slate-900 p-5">

                    <div className="mb-5 flex items-center justify-between">
                        <div>
                            <h2 className="text-lg font-semibold">BTCUSDT</h2>
                            <p className="text-sm text-slate-400">
                                Price Chart
                            </p>
                        </div>

                        <div className="flex gap-2">
                            <button className="rounded-md bg-blue-600 px-3 py-1 text-sm">
                                1m
                            </button>

                            <button className="rounded-md bg-slate-800 px-3 py-1 text-sm">
                                5m
                            </button>

                            <button className="rounded-md bg-slate-800 px-3 py-1 text-sm">
                                15m
                            </button>

                            <button className="rounded-md bg-slate-800 px-3 py-1 text-sm">
                                1h
                            </button>
                        </div>
                    </div>

                    {/* Chart Placeholder */}
                    <div className="flex h-[450px] items-center justify-center rounded-lg border border-dashed border-slate-700 bg-slate-950">
                        <p className="text-slate-500">
                            Chart will appear here
                        </p>
                    </div>

                </div>

                {/* Buy / Sell */}
                <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">

                    <div className="mb-5 grid grid-cols-2 rounded-lg bg-slate-800 p-1">
                        <button className="rounded-md bg-green-500 py-2 font-semibold">
                            Buy
                        </button>

                        <button className="rounded-md py-2 font-semibold text-slate-400">
                            Sell
                        </button>
                    </div>

                    <label className="mb-2 block text-sm text-slate-400">
                        Amount
                    </label>

                    <input
                        type="number"
                        placeholder="Enter amount"
                        className="mb-4 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none"
                    />

                    <div className="mb-4 rounded-lg bg-slate-800 p-4">
                        <div className="flex justify-between">
                            <span className="text-slate-400">Price</span>
                            <span>$86,000</span>
                        </div>

                        <div className="mt-2 flex justify-between">
                            <span className="text-slate-400">Estimated</span>
                            <span>0.00 BTC</span>
                        </div>
                    </div>

                    <button className="w-full rounded-lg bg-green-500 py-3 font-semibold text-black">
                        Buy BTC
                    </button>

                </div>

            </div>

            {/* Bottom Section */}
            <div className="mt-6 grid gap-6 lg:grid-cols-2">

                {/* Recent Trades */}
                <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
                    <h2 className="mb-4 text-lg font-semibold">
                        Recent Trades
                    </h2>

                    <div className="space-y-3 text-sm">
                        <div className="flex justify-between border-b border-slate-800 pb-3">
                            <span>12:45:32</span>
                            <span className="text-green-400">$86,120</span>
                            <span>0.015 BTC</span>
                        </div>

                        <div className="flex justify-between border-b border-slate-800 pb-3">
                            <span>12:45:28</span>
                            <span className="text-red-400">$86,100</span>
                            <span>0.008 BTC</span>
                        </div>

                        <div className="flex justify-between">
                            <span>12:45:20</span>
                            <span className="text-green-400">$86,080</span>
                            <span>0.012 BTC</span>
                        </div>
                    </div>
                </div>

                {/* Market Info */}
                <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
                    <h2 className="mb-4 text-lg font-semibold">
                        Market Info
                    </h2>

                    <div className="space-y-4">
                        <div className="flex justify-between">
                            <span className="text-slate-400">Symbol</span>
                            <span>BTCUSDT</span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-slate-400">Interval</span>
                            <span>1m</span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-slate-400">Market Status</span>
                            <span className="text-green-400">Open</span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-slate-400">Volume</span>
                            <span>80.94 BTC</span>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default MarketDashboard;

