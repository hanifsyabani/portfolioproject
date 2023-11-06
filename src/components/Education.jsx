import React, { useState } from "react";

const dataEdu = [
  {
    id: 1,
    name: "Sriwijaya University",
    detail: "Computer System",
    year: "2022-Present",
  },
  {
    id: 2,
    name: "MAN 1 Musi Banyuasin",
    detail: "Science Edu",
    year: "2019-2022",
  },
];

const Education = () => {
  const [query, setQuery] = useState(dataEdu);

  return (
    <section id="education">
      <div className="container-set py-[7rem] xl:flex xl:justify-center xl:gap-10">
        <div className="xl:w-1/2">
          <h1 className="title">Education</h1>
          <div className="mt-10">
            {query.map((edu) => (
              <div key={edu.id} className="w-full max-w-md mb-10">
                <h1 className="edu-name">{edu.name}</h1>
                <div className="edu-major">
                  <p>{edu.detail}</p>
                  <span>{edu.year}</span>
                </div>
                <hr width="85%" color="#aaaaaa" className="mt-8" />
              </div>
            ))}
          </div>
        </div>
        <div className="xl:w-1/2">
          <h1 className="title">Achievement</h1>
          <div className="mt-10">
            <h1 className="edu-name">Top 5th Poster Competition</h1>
            <div className="edu-major">
              <p>SPH Fest Sriwijaya</p>
              <span>2023</span>
            </div>
            <hr width="85%" color="#aaaaaa" className="mt-8" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
