import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
} from '@chakra-ui/react';
import { useState } from 'react';

interface Props {
  isOpen: boolean;
  onClose: VoidFunction;
  onAddTagFilter: React.Dispatch<React.SetStateAction<string>>;
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

export const AddTagFilterModal = ({
  isOpen,
  onClose,
  onAddTagFilter,
}: Props) => {
  const [tag, setTag] = useState<string>('');
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent p="5" bg="darkbg" color="textHeading">
        {' '}
        <ModalHeader>Add Tag Filter</ModalHeader>
        <ModalCloseButton />
        <ModalBody p="4">
          <Select
            placeholder="Select tag"
            onChange={(e) => setTag(e.target.value)}
          >
            {unique_tags.map((tag, i) => (
              <option key={i} value={tag}>
                {tag}
              </option>
            ))}
          </Select>{' '}
          <Flex mt="9" justifyContent="end">
            <Button variant="primary" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              type="submit"
              variant="primaryRedBtn"
              onClick={() => {
                onAddTagFilter(tag);
                onClose();
              }}
            >
              Search
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
