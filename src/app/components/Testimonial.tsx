interface TestimonialProps {
  name: string;
  message: string;
}

const Testimonial = ({ name, message }: TestimonialProps) => {
  return (
    <div className="testimonial">
      <p className="testimonial-message">"{message}"</p>
      <p className="testimonial-name">- {name}</p>
    </div>
  );
};

export default Testimonial;
