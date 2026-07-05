import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";

import Card from "../ui/Card";
import Button from "../ui/Button";

export default function WelcomeCard() {
  return (
    <Card className="relative overflow-hidden bg-gradient-to-r from-[#5B5FEF] via-[#4F7CFF] to-[#3B82F6]">

      {/* Blur Background */}
      <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 right-32 h-60 w-60 rounded-full bg-cyan-300/10 blur-3xl" />

      <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <span className="inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur">
            Dashboard Overview
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-white lg:text-5xl">
            Welcome back,
            <br />
            Budi👋
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-blue-100">
            Monitor revenue, customer growth, subscriptions,
            analytics and business performance from one modern
            dashboard.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <Button className="bg-white text-[#4F7CFF] hover:bg-slate-100">
              View Report
            </Button>

            <Button
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
            >
              Analytics

              <ArrowRight
                size={18}
                className="ml-2 inline"
              />
            </Button>

          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
          }}
          className="hidden lg:flex"
        >
          <div className="flex h-44 w-44 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl">

            <TrendingUp
              size={90}
              className="text-white"
            />

          </div>
        </motion.div>

      </div>
    </Card>
  );
}