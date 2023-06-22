interface SkillsProps {
  image: string;
}

const Skills: React.FC<SkillsProps> = ({ image }) => {
  return (
    <section className="d-flex justify-content-center align-items-center">
      <div>
        <img src={image} alt="Tool" style={{width:"150px",height:"150px"}}/>
      </div>
    </section>
  );
};

export default Skills;
