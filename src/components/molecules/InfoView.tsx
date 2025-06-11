import Button from '@/components/atoms/Button';
import Typography from '@/components/atoms/Typography';

export default function InfoView({ data }: { data: any }) {
  return (
    <div className="text-center lg:text-left md:mr-[10px]">
      <Typography text={data.headline} variant="aboutTitle" />
      <Typography
        variant="helloTitle"
        dangerouslySetInnerHTML={{ __html: data.title }}
      />
      <Typography text={data.description} variant="description" />
      <div className="hidden lg:inline-flex">
        <Button href={data.button.link}>{data.button.title}</Button>
      </div>
    </div>
  );
}
