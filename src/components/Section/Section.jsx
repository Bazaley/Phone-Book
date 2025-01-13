import PropTypes from 'prop-types';
import Container from 'components/Container/Container';
import { SectionTag, TitleStyled } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionTag>
      <Container>
        {title && <TitleStyled>{title}</TitleStyled>}

        {children}
      </Container>
    </SectionTag>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};
