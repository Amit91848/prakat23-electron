import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import jsPDF from 'jspdf';
import { useState } from 'react';

interface Props {
  isOpen: boolean;
  onClose: VoidFunction;
  report: string;
  report_id: string;
}

export const ReportViewer = ({ isOpen, onClose, report, report_id }: Props) => {
  const [isMailLoading, setIsMailLoading] = useState(false);
  const toast = useToast();
  const downloadPdf = () => {
    const doc = new jsPDF();

    const lines = doc.splitTextToSize(report, 240); // Adjust the width (180) as needed for your content
    let y = 10;

    doc.setFontSize(12);
    const renderTextOnPage = () => {
      lines.forEach((line) => {
        // Check if there is enough space on the current page
        if (y + 10 > doc.internal.pageSize.height) {
          // Add a new page if there is not enough space
          doc.addPage();
          y = 10; // Reset the y-coordinate for the new page
        }
        doc.text(10, y, line);
        y += 10; // Adjust the line spacing as needed
      });
    };

    // Call the function to render text on the pages
    renderTextOnPage();
    doc.save(`report_${new Date().getTime()}`);
  };

  const send_email = async () => {
    setIsMailLoading(true);
    const response = await axios.get(
      `http://localhost:8000/mail/send/?report_id=${report_id}`
    );

    if (response.status === 200) {
      toast({
        title: 'Report has been sent.',
        description: "We've sent email to your address",
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
    }
    setIsMailLoading(false);
  };

  return (
    <Modal size="4xl" onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent p="5" color="textHeading">
        <ModalHeader> Report Generated</ModalHeader>
        <ModalCloseButton />
        <ModalBody maxH="calc(100vh - 260px)" overflowY="scroll" p="4">
          {report.split('\n').map((item) => (
            <span>
              {item}
              <br />
            </span>
          ))}
        </ModalBody>
        <ModalFooter>
          <Button variant="primary" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button
            mr="4"
            onClick={downloadPdf}
            type="submit"
            variant="primaryRedBtn"
          >
            Download Report
          </Button>
          <Button
            isDisabled={isMailLoading}
            onClick={send_email}
            type="submit"
            variant="primaryRedBtn"
          >
            Send Email
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
