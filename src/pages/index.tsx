import * as React from "react";
import type { HeadProps, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Hyperlink from "../components/Hyperlink";
import ColumnSection from "../components/ColumnSection";

function IndexPage(props: React.FC<PageProps>) {
  return (
    <React.Fragment>
      <main className="flex flex-col justify-start items-center container mx-auto mb-8 columns-1">
        <StaticImage
          alt="Logo.  Houses in multiple colors"
          className="mx-auto rounded-2xl"
          layout="constrained"
          placeholder="blurred"
          src="../images/houses.jpg"
        />
        <h1 className="text-center my-4 font-semibold">
          <span className="text-7xl text-orange">B</span>
          <span className="text-7xl text-blue">L</span>
          <span className="text-7xl text-pink">O</span>
          <span className="text-7xl text-green">C</span>
          <span className="text-7xl text-purple">K</span>
          <span className="text-7xl"> </span>
          <span className="text-7xl text-orange">P</span>
          <span className="text-7xl text-blue">A</span>
          <span className="text-7xl text-pink">R</span>
          <span className="text-7xl text-green">T</span>
          <span className="text-7xl text-purple">Y</span>
          <br />
          <span className="text-2xl font-normal text-slate-500 dark:text-zinc-400">
            Come Meet Your Neighbors!
          </span>
        </h1>
        <div className="container columns-1 gap-8 sm:columns-2">
          <ColumnSection>
            <h2 className="text-3xl font-medium">Who’s Invited</h2>
            <p className="">
              Everyone who lives on Fern Way, Woodmoor Drive, Winchester Drive,
              Richard Road, McMahon Road between Concord Road and JGMS, and
              Concord Road between Woodmoor Drive and McMahon Road.
            </p>
            <div className="flex flex-row justify-center items-center">
              <figure className="break-inside-avoid-column">
                <StaticImage
                  alt="Map of streets included in the Block Party: Fern Way, Woodmoor Drive, Winchester Drive, Richard Road, a portion of McMahon Road, and a portion of Concord Road."
                  className="rounded-2xl"
                  layout="constrained"
                  placeholder="blurred"
                  src="../images/block-party-map.jpg"
                  height={500}
                  width={500}
                />
                <figcaption className="text-slate-500 dark:text-zinc-400 text-center">
                  Map of the Block Party neighborhood
                </figcaption>
              </figure>
            </div>
          </ColumnSection>
          <div>
            <ColumnSection>
              <h2 className="mt-4 text-3xl font-medium">When</h2>
              <p className="">
                <Hyperlink
                  externalSite={true}
                  href="https://www.bedfordma.gov/269/Bedford-Day"
                >
                  Bedford Day
                </Hyperlink>{" "}
                - <time dateTime="2024-09-21">September 21, 2024</time> from{" "}
                <time dateTime="2024-09-21T16:00">4pm</time> until{" "}
                <time dateTime="2024-09-21T20:00">8pm</time>.
              </p>
            </ColumnSection>
            <ColumnSection>
              <h2 className="mt-4 text-3xl font-medium">Where</h2>
              <p className="">
                In front of{" "}
                <Hyperlink
                  externalSite={true}
                  href="https://goo.gl/maps/ZXCJebVCKc3kvcpZA"
                >
                  12 Fern Way
                </Hyperlink>
                .
              </p>
            </ColumnSection>
            <ColumnSection>
              <h2 className="mt-4 text-3xl font-medium">How it works</h2>
              <div className="space-y-4">
                <p>
                  It's really easy. The Block Party is a neighborhood potluck.
                  We block off the road, folks bring themselves and something to
                  eat and drink. We order pizza just in case. Sometimes folks
                  grill hot dogs or chicken wings.
                </p>
                <p>Kids play. Adults talk. Dogs bark.</p>
                <p>
                  And at some point, folks head up to watch Bedford Day
                  fireworks. Others stay behind to help clean up. And there's
                  usually a last minute scramble to get people to take home
                  leftovers, because it's hard for one family to eat 3 extra
                  pizzas on their own.
                </p>
              </div>
            </ColumnSection>
            <ColumnSection>
              <h2 className="mt-4 text-3xl font-medium">Get Involved!</h2>
              <ol className="list-decimal list-inside">
                <li>
                  <Hyperlink
                    externalSite={true}
                    href="https://docs.google.com/document/d/1KDE_rM-pTY6vj1_pJXR8JHmHVGXw5h4eUVT74f5zSLQ/edit"
                  >
                    Sign up to bring something.
                  </Hyperlink>
                </li>
                <li>
                  Get updates in our{" "}
                  <Hyperlink
                    externalSite={true}
                    href="https://groups.google.com/my-groups"
                  >
                    Google Group
                  </Hyperlink>{" "}
                  with group name:
                  <br />
                  <em>block-party-bedford-day</em>
                  <br /> (Not a member?{" "}
                  <Hyperlink href="mailto:block-party-bedford-day+subscribe@googlegroups.com">
                    Join the group.
                  </Hyperlink>
                  )
                </li>
              </ol>
            </ColumnSection>
          </div>
        </div>
      </main>
      <footer className="pt-1 bg-gradient-to-r from-orange via-blue via-pink via-green to-purple">
        <div className="bg-white dark:bg-slate-800">
          <div className="flex flex-row justify-end">
            <div className="space-y-1 flex flex-col items-end p-1 px-4">
              <button
                className="underline text-blue hover:text-pink visited:text-purple dark:visited:text-orange dark:hover:text-pink"
                onClick={() => {
                  const isDark =
                    document.documentElement.classList.contains("dark");
                  if (isDark) {
                    document.documentElement.classList.remove("dark");
                  } else {
                    document.documentElement.classList.add("dark");
                  }
                }}
              >
                Toggle dark mode
              </button>
              <p className="italic text-slate-500 dark:text-zinc-400">
                Web design by a friendly neighbor
              </p>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default IndexPage;

export function Head(props: HeadProps) {
  return (
    <>
      <html
        className={
          typeof window !== "undefined"
            ? window.matchMedia("(prefers-color-scheme: dark)").matches
              ? "dark"
              : ""
            : ""
        }
        lang="en"
      />
      <title>Bedford Block Party - September 21, 2024 from 4-8pm</title>
      <meta
        name="description"
        content="There's a Block Party in Bedford, MA for everyone who lives on Fern Way, 
              Woodmoor Drive, Winchester Drive, Richard Road, McMahon Road between Concord 
              Road and JGMS, and Concord Road between Woodmoor Drive and McMahon Road."
      />
      <body className="bg-white dark:bg-slate-800 text-slate-800 dark:text-zinc-200" />
    </>
  );
}
