import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto p-4 mt-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                About
              </span>
              <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-foregound font-heading ">
                Hello, I'm Azhar
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                I'm a climate scientist at the Center for Climate Systems
                Research (CCSR), Columbia Climate School. My work focuses on
                understanding the dynamics of climate variability — especially
                in the tropics — and on advancing prediction across subseasonal,
                seasonal, and decadal timescales.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                I grew up watching monsoon skies decide whether a season would
                feed a family or break one. That memory still shapes the
                questions I ask: how predictable is our climate, who benefits
                when we forecast it well, and how do we make that science useful
                to the people on the frontline of change?
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Beyond the lab, I love mentoring students, communicating climate
                science to broader audiences, and building bridges between
                modelers, forecasters, and decision-makers across agriculture,
                water, and disaster-risk sectors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
