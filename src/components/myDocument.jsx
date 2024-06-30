import { useContext } from "react";
// import { Link } from "react-router-dom";
import { Document, Page, View, Text, Link, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({ 
  page: {
    padding: '24px',
    width: '2480px',
    height: '3508px',
  },
  detailText: {
    fontSize: "12px"
  },  
  header: {
    fontSize: '24px',
    textAlign: 'center',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    gap: '8px',
    justifyContent: 'center'
  },
  centerText: {
    textAlign: 'center',
    width: '100%',
    marginTop: '2px'
  },
  sectionTitle: {
    fontSize: '16px',
    fontWeight: 'medium',
  },
  hr: {
    borderBottomWidth: '1px',
    borderTopWidth: 0,
    borderColor: 'black',
  },
  flexBetween: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  gap2: {
    display: 'flex',
    flexDirection: 'row',
    gap: '8px',
  },
  link: {
    textDecoration: 'underline',
    cursor: 'pointer',
    fontSize: '12px',
    marginTop: '2px'
  },
  mt2: {
    marginTop: '8px',
  },
  mt4: {
    marginTop: '16px',
  },
  ml2: {
    marginLeft: '4px',
  },
  fontMedium: {
    fontWeight: 'bold',
    fontSize: '12px'
  },
  textNormal: {
    fontSize: '12px'
  }
});

const MyDocument = ({userDetails}) => {  

  const { name, email, phone, address, jobTitle, links, education, experience, skillset, projects } = userDetails;

  return <Document>
    <Page style={styles.page}>
      {/* Personal Info */}
      <View>
        <Text style={styles.header}>{name}</Text>
        <View style={styles.flexRow}>
          {phone.length > 0 && <Text style={styles.detailText}>{phone}</Text>}
          {email.length > 0 && <Text style={styles.detailText}>| {email}</Text>}
          {jobTitle.length > 0 && <Text style={styles.detailText}>| {jobTitle}</Text>}
        </View>
        {address.length > 0 && <Text style={[styles.centerText, styles.detailText]}>{address}</Text>}
        <View style={[styles.flexRow, styles.fontMedium]}>
          {links.linkedIn.length > 0 && (
            <Link style={styles.link} src={links.linkedIn}>
              LinkedIn
            </Link>
          )}
          {links.github.length > 0 && (
            <Link style={styles.link} src={links.github}>
              | Github
            </Link>
          )}
          {links.x.length > 0 && (
            <Link style={styles.link} src={links.x}>
              | x
            </Link>
          )}
        </View>
      </View>

      {/* Education */}
      <View>
        <Text style={styles.sectionTitle}>Education</Text>
        <View style={styles.hr} />
        {education.map((edu, i) => (
          <View key={i} style={styles.mt2}>
            <View style={styles.flexBetween}>
              <Text style={styles.fontMedium}>{edu.institute}</Text>
              <Text style={styles.textNormal}>{edu.startYear} - {edu.endYear.length ? edu.endYear : 'Present'}</Text>
            </View>
            <View style={styles.flexBetween}>
              <View style={styles.gap2}>
                <Text style={styles.fontMedium}>{edu.degree}</Text>
                {edu.fieldOfStudy && '|'}
                <Text style={styles.textNormal}>{edu.fieldOfStudy}</Text>
              </View>
              <Text style={styles.textNormal} >CGPA - {edu.cgpa}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Experience */}
      <View style={styles.mt4}>
        <Text style={styles.sectionTitle}>Experience</Text>
        <View style={styles.hr} />
        {experience.map((exp, i) => (
          <View key={i} style={styles.mt2}>
            <View style={styles.flexBetween}>
              <View style={styles.gap2}>
                <Text style={styles.fontMedium}>{exp.employer}</Text>
                <Text style={styles.fontMedium}>{exp.title.length > 0 && '|'}</Text>
                <Text style={styles.fontMedium}>{exp.title}</Text>
              </View>
              <View style={styles.gap2}>
                <Text style={styles.textNormal} >{exp.location}</Text>
                <Text style={styles.fontMedium}>{exp.location.length > 0 && '|'}</Text>
                <Text style={styles.textNormal}>{exp.startDate} - {exp.endDate.length ? exp.endDate : 'Present'}</Text>
              </View>
            </View>
            <View style={[styles.ml2, styles.mt2]}>
              <Text style={styles.textNormal}>{exp.description}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Projects */}
      <View style={styles.mt4}>
        <Text style={styles.sectionTitle}>Projects</Text>
        <View style={styles.hr} />
        {projects.map((project, i) => (
          <View key={i} style={styles.mt2}>
            <View style={styles.flexBetween}>
              <View style={styles.gap2}>
                <Text style={styles.fontMedium}>{project.title.length > 0 && project.title}</Text>
                {project.link.length > 0 && (
                  <Link style={[styles.fontMedium, styles.link]} src={project.link}>
                    | Link
                  </Link>
                )}
              </View>
              <Text style={styles.textNormal}>{project.technologyUsed.length > 0 && project.technologyUsed}</Text>
            </View>
            <View style={styles.mt2}>
              <Text style={styles.textNormal}>{project.description.length > 0 && project.description}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Skills */}
      <View style={styles.mt4}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <View style={styles.hr} />
        <View style={styles.mt2}>
          <View style={styles.gap2}>
            <Text style={styles.fontMedium}>Languages:</Text>
            <Text style={styles.textNormal}>{skillset.languages}</Text>
          </View>
          <View style={styles.gap2}>
            <Text style={styles.fontMedium}>Libraries:</Text>
            <Text style={styles.textNormal}>{skillset.libraries}</Text>
          </View>
          <View style={styles.gap2}>
            <Text style={styles.fontMedium}>Tools/Platforms:</Text>
            <Text style={styles.textNormal}>{skillset.tools}</Text>
          </View>
          <View style={styles.gap2}>
            <Text style={styles.fontMedium}>Databases/Clouds:</Text>
            <Text style={styles.textNormal} >{skillset.databases}</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
};

export default MyDocument;
