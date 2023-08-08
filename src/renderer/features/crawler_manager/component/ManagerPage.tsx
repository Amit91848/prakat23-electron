import { useState } from 'react';
import { Button, Divider, Stack } from '@chakra-ui/react';
import { Heading } from 'renderer/components/Heading';
import { CrawlerList } from './CrawlerList';
import { AddCrawlerModal } from './AddCrawlerModal';

export function ManagerPage() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Stack h="full" spacing="2">
      <Heading title="Crawler Manager" />

      <Button
        onClick={() => setIsModalOpen(true)}
        variant="primaryRedBtn"
        m="3"
      >
        Add new Crawler
      </Button>
      <Divider />

      <CrawlerList />
      {isModalOpen && (
        <AddCrawlerModal isOpen={isModalOpen} onClose={handleCloseModal} />
      )}
    </Stack>
  );
}
