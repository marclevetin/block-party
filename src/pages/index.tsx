import * as React from "react";
import type { PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Hyperlink from "../components/Hyperlink";

function IndexPage(props: React.FC<PageProps>) {
  return (
    <React.Fragment>
      <main className="flex flex-col justify-start items-center container mx-auto mb-8 columns-1">
        <StaticImage
          alt="Logo.  Houses in multiple colors"
          src="../images/houses.jpg"
          className="mx-auto"
        />
        <h1 className="text-center my-4">
          <span className="text-7xl text-orange">B</span>
          <span className="text-7xl text-blue">L</span>
          <span className="text-7xl text-pink">O</span>
          <span className="text-7xl text-green">C</span>
          <span className="text-7xl text-pink">K</span>
          <span className="text-7xl"> </span>
          <span className="text-7xl text-orange">P</span>
          <span className="text-7xl text-blue">A</span>
          <span className="text-7xl text-pink">R</span>
          <span className="text-7xl text-green">T</span>
          <span className="text-7xl text-purple">Y</span>
          <br />
          <span className="text-2xl">Come Meet Your Neighbors!</span>
        </h1>
        <div className="container columns-1 gap-8 sm:columns-2">
          <div className="-mt-4">
            <h2 className="my-4 text-3xl">Who’s Invited</h2>
            <p className="">
              Everyone who lives on Fern Way, Woodmoor Drive, Winchester Drive,
              Richard Road, McMahon Road between Concord Road and JGMS, and
              Concord Road between Woodmoor Drive and McMahon Road.
            </p>
            <div className="flex flex-row justify-center items-center">
              <StaticImage
                alt="Map of streets included in the Block Party: Fern Way, Woodmoor Drive, Winchester Drive, Richard Road, a portion of McMahon Road, and a portion of Concord Road."
                src="../images/block-party-map.jpg"
                className="w-96 rounded-2xl"
              />
            </div>
          </div>
          <div>
            <h2 className="my-4 text-3xl">When</h2>
            <p className="">
              <Hyperlink href="https://www.bedfordma.gov/269/Bedford-Day">
                Bedford Day
              </Hyperlink>{" "}
              - <time dateTime="2023-09-23">September 23, 2023</time> from{" "}
              <time dateTime="2023-09-23T16:00">4pm</time> until{" "}
              <time dateTime="2023-09-23T20:00">8pm</time>.
            </p>
            <h2 className=" my-4 text-3xl">Where</h2>
            <p className="">
              In front of{" "}
              <Hyperlink href="https://goo.gl/maps/ZXCJebVCKc3kvcpZA">
                12 Fern Way
              </Hyperlink>
              .
            </p>
            <h2 className=" my-4 text-3xl">Get Involved!</h2>
            <ol className="list-decimal list-inside">
              <li>
                <Hyperlink href="https://docs.google.com/document/d/1KDE_rM-pTY6vj1_pJXR8JHmHVGXw5h4eUVT74f5zSLQ/edit">
                  Sign up to bring something.
                </Hyperlink>
              </li>
              <li>
                Get updates in our{" "}
                <Hyperlink href="https://groups.google.com/my-groups">
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
          </div>
        </div>
      </main>
      <footer className="flex flex-row justify-end">
        <p className="text-zinc-400">
          Web design by your friendly neighborhood Spiderman.{" "}
          <Hyperlink href="http://www.freepik.com">
            Background designed by Freepik.
          </Hyperlink>
        </p>
      </footer>
    </React.Fragment>
  );
}

export default IndexPage;
