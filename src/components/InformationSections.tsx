
import TestingSandbox from '@/components/TestingSandbox';
import DeploymentSection from '@/components/DeploymentSection';
import DocumentationSection from '@/components/DocumentationSection';
import CallToAction from '@/components/CallToAction';

const InformationSections = () => {
  return (
    <>
      <div id="testing-sandbox">
        <TestingSandbox />
      </div>
      
      <div id="deployment">
        <DeploymentSection />
      </div>
      
      <div id="documentation">
        <DocumentationSection />
      </div>
      
      <CallToAction />
    </>
  );
};

export default InformationSections;
