import { useContext } from "react";
import { userContext } from "../App";
import { Link } from "react-router-dom";

const ResumeRender = () => {

    const {userDetails} = useContext(userContext);
    const { name, email, phone, address, jobTitle, links, education, experience, skillset, projects } = userDetails;

    return <div className="w-[1240px] h-[1754px] border-2 border-black p-10">
        {/* personal info */}

        <div>
            <h1 className="text-[36px] text-center">{name}</h1>
            <div className="flex gap-2 w-full justify-center">
                {
                    phone.length ? 
                    <div> 
                        <p>{phone}</p>

                    </div>
                    : ''
                }

                {
                    email.length ? 
                    <div>
                        <p>| {email}</p>
                    </div>
                    : ''
                }

                {
                    jobTitle.length ? 
                    <div>
                        <p>| {jobTitle}</p>
                    </div>
                    : ''
                }
            </div>

            <div className="flex w-full">
                {
                    address.length > 0 && <p className="text-center w-full">{address}</p>
                }
            </div>

            <div className="flex w-full justify-center gap-2 font-medium">
                {
                    links.linkedIn.length > 0 && <Link className="cursor-pointer" to={links.linkedIn}>LinkedIn</Link>
                }

                {
                    links.github.length > 0 && <Link className="cursor-pointer" to={links.github}>| Github</Link>
                }

                {
                    links.x.length > 0 && <Link className="cursor-pointer" to={links.x}>| x</Link>
                }
            </div>
        </div>

        {/* Education */}

        <div >
            <h1 className="font-medium text-[18px]">Education</h1>
            <hr className="border-2 border-t-0 border-black" />

            {
                education.map((edu, i) => <div key={i} className="mt-2">
                    <div className="flex w-full justify-between">
                        <p className="font-medium">{edu.institute}</p>
                        <p>{edu.startYear} - {edu.endYear.length ? edu.endYear : "Present"}</p>
                    </div>

                    <div className="flex w-full justify-between">
                        <div className="flex gap-2">
                            <p>{edu.degree}</p>
                            {edu.fieldOfStudy && '|'}
                            <p>{edu.fieldOfStudy}</p>
                        </div>

                        <div>
                            <p>CGPA - {edu.cgpa}</p>
                        </div>
                    </div>
                </div>)
            }
        </div>

            {/* Experience */}

        <div className="mt-4">
            <h1 className="font-medium text-[18px]">Experience</h1>
            <hr className="border-2 border-t-0 border-black" />

            {
                experience.map((exp, i) => <div key={i} className="mt-2">
                    <div className="flex justify-between w-full">
                        <div className="flex gap-2">
                            <p className="font-medium">{exp.employer}</p>
                            {exp.title.length > 0 && "|"}
                            <p className="font-medium">{exp.title}</p>
                        </div>

                        <div className="flex gap-2">
                            <p>{exp.location}</p>
                            {exp.startDate.length && '|'}
                            <p>{exp.startDate} - {exp.endDate.length ? exp.endDate : "Present"}</p>
                        </div>
                    </div>

                    <div className="w-full ml-2 mt-2">
                        <p>{exp.description}</p>
                    </div>
                </div>)
            }
        </div>

        {/* Projects */}

        <div className="mt-4">
            <h1 className="font-medium text-[18px]">Projects</h1>
            <hr className="border-2 border-t-0 border-black" />

            {
                projects.map((project, i) => <div key={i} className="mt-2">
                    <div className="flex justify-between w-full">
                        <div className="flex gap-2">
                            <p className="font-medium" >{project.title.length > 0 && project.title}</p>
                            {project.link.length > 0 && <Link className="font-medium underline"  to={project.link}>| Link</Link>}
                        </div>

                        <div>
                            <p>{project.technologyUsed.length>0 && project.technologyUsed}</p>
                        </div>
                    </div>

                    <div className="mt-2">
                        <p>{project.description.length>0 && project.description}</p>
                    </div>
                </div>)
            }
        </div>

        {/* Skills */}

        <div className="mt-4">
            <h1 className="font-medium text-[18px]">Skills</h1>
            <hr className="border-2 border-t-0 border-black" />


            <div className="flex gap-2">
                <p className="font-medium">Languages:</p>
                <p>{skillset.languages}</p>
            </div>

            <div className="flex gap-2">
                <p className="font-medium">Libraries:</p>
                <p>{skillset.libraries}</p>
            </div>

            <div className="flex gap-2">
                <p className="font-medium">Tools/Platforms:</p>
                <p>{skillset.tools}</p>
            </div>

            <div className="flex gap-2">
                <p className="font-medium">Databases/Clouds:</p>
                <p>{skillset.databases}</p>
            </div>
        </div>
        



    </div>
}

export default ResumeRender;