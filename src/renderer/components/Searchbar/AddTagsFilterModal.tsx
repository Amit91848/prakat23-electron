import {
  Button,
  Checkbox,
  CheckboxGroup,
  Flex,
  Grid,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  VStack,
} from '@chakra-ui/react';
import { useLocales } from 'locales';
import { useState } from 'react';

interface Props {
  isOpen: boolean;
  onClose: VoidFunction;
  onAddTagsFilter: React.Dispatch<React.SetStateAction<string[]>>;
}

const unique_tags = [
  'Heroin',
  'Stimulants',
  'Revolvers',
  'Marijuana',
  'Barbiturates',
  'Steroids',
  'BTC Wallet Address',
  'Depressants ',
  'Bath Salts',
  'Fentanyl',
  'Machine Guns',
  'Pistol',
  'Monero Wallet Address',
  'DXM',
  'Assault Rifle',
  'Rifles',
  'Hallucinogens',
  'Hydromorphone',
  'Shotguns',
  'Ecstasy',
  'Salvia Divinorum',
  'Opiods',
  'Oxycodone',
  'Cocaine',
  'Metamphetamine',
  'Sniper Rifle',
  'Spice/ K2, Synthetic Marijuana',
  'Rohypnol',
  'SubMachine Gun',
  'Amphetamines',
  'Benzodiazepines',
];

export const AddTagsFilterModal = ({
  isOpen,
  onClose,
  onAddTagsFilter,
}: Props) => {
  const { t } = useLocales();
  // const [tags, setTags] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);

  const handleTagsChange = (selectedTags: string[]) => {
    setTags(selectedTags);
  };

  const handleClearSelection = () => {
    setTags([]);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'2xl'}>
      <ModalOverlay />
      <ModalContent p="5" color="textHeading">
        {' '}
        <ModalHeader>Add Tag Filter</ModalHeader>
        <ModalCloseButton />
        <ModalBody p="4">
          <CheckboxGroup
            colorScheme="blue"
            value={tags}
            onChange={handleTagsChange}
          >
            <Grid
              templateColumns="repeat(auto-fill, minmax(155px, 1fr))"
              gap={4}
            >
              {unique_tags.map((tag, i) => (
                <Checkbox value={tag} key={i}>
                  {tag}
                </Checkbox>
              ))}
            </Grid>
          </CheckboxGroup>
          <Flex mt="9" justifyContent="end">
            <Button variant="primary" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClearSelection}>
              Clear Tags
            </Button>
            <Button
              type="submit"
              variant="primaryRedBtn"
              onClick={() => {
                onAddTagsFilter(tags);
                onClose();
              }}
            >
              {t('search')}
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
