export default function Workflow() {
    return (
        <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-purple-500">
            <div className="max-w-6xl mx-auto text-center">

                {/* ── Heading ── */}
                <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white mb-4">
                    Ready To Transform Your Workflow?
                </h2>

                {/* ── Subheading ── */}
                <p className="text-purple-100 text-sm md:text-base mb-8 max-w-2xl mx-auto">
                    Start using premium digital tools in minutes. Get instant access to all premium features. Catch you live today.
                </p>

                {/* ── Buttons ── */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <button className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-full font-semibold transition-all shadow-lg">
                        Explore Products
                    </button>
                    <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold transition-all">
                        View Pricing
                    </button>
                </div>

                {/* ── Footer text ── */}
                <p className="text-purple-100 text-xs md:text-sm">
                    No risk from trial - No credit card required - Cancel anytime
                </p>

            </div>
        </section>
    )
}
