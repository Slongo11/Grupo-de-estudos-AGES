import './Academic.css';
import BoxInfo from "./BoxInfo";

const Academic = () => {
    const academicData = [
        {
            url: "./PUCRS.svg",
            alt: "PUCRS",
            info1: "Course: Computer Science",
            info2: "Estimated completion: 8 semesters",
            info3: "Start date: February 2024",
            more: "https://portal.pucrs.br/ensino/cursos/graduacao/ciencia-da-computacao/"
        },
    ];
    return (
        <section id="academic-section">
            <h2>Academic Background</h2>
            <div className="academic">
                {academicData.map(data => {
                    return (
                        <BoxInfo
                            key={data.alt}
                            url={data.url}
                            alt={data.alt}
                            info1={data.info1}
                            info2={data.info2}
                            info3={data.info3}
                            more={data.more}
                        />
                    );
                })}
            </div>
        </section>
    );
}

export default Academic;