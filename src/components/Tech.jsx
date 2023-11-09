import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const TechBadge = ({ technology }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={styles.techBadge}
    >
      <img src={technology.icon} alt={technology.name} className={styles.techIcon} />
      <p className={styles.techName}>{technology.name}</p>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>My skills</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {technologies.map((technology) => (
          <TechBadge key={technology.name} technology={technology} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');
