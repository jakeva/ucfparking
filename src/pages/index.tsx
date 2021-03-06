import { Meta } from "../layout/Meta";
import { Section } from "../layout/Section";
import { Charts } from "../template/Charts";
import { Shell } from "../template/Shell";
import { Stats } from "../template/Stats";
import { AppConfig } from "../utils/AppConfig";

const Index = () => {
  return (
    <>
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Shell title="UCF Parking">
        <Section>
          <Stats />
        </Section>

        <Section>
          <Charts />
        </Section>
      </Shell>
    </>
  );
};

export default Index;
