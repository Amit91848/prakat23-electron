import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  NumberInput,
  NumberInputField,
  RadioGroup,
  Radio,
  Stack,
  Box,
  Flex,
} from '@chakra-ui/react';
import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';

import { FaSpider } from 'react-icons/fa';
import { useCreateDiscussion } from '../api/createCrawler';

interface Props {
  isOpen: boolean;
  onClose: VoidFunction;
}

export const AddCrawlerModal = ({ isOpen, onClose }: Props) => {
  const createCrawlerMutation = useCreateDiscussion();
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent p="5" bg="darkbg" color="textHeading">
        <ModalHeader>Crawler Settings</ModalHeader>
        <ModalCloseButton />
        <ModalBody p="4">
          <Formik
            onSubmit={async (values) => {
              await createCrawlerMutation.mutateAsync(values);
              onClose();
            }}
            // initialValues={{ data: { url: '', limit: 100, same_domain: true } }}
            initialValues={{ url: '', limit: 100, same_domain: true }}
          >
            {(props) => (
              <form onSubmit={props.handleSubmit}>
                <Stack spacing="5">
                  <InputGroup>
                    <InputLeftElement>
                      <FaSpider />
                    </InputLeftElement>
                    <Input
                      name="url"
                      // onChange={(e) => {
                      //   props.setFieldValue('data.url', e.target.value);
                      // }}
                      onChange={props.handleChange}
                      type="url"
                      // value={props.values.data.url}
                      value={props.values.url}
                      placeholder="Enter URL that you want to crawl"
                    />
                    <ErrorMessage name="url" />
                  </InputGroup>

                  <RadioGroup
                    onChange={(value) =>
                      props.setFieldValue('same_domain', value === '1')
                    }
                    value={props.values.same_domain ? '1' : '0'}
                  >
                    <label>Same domain?</label>
                    <Stack direction="row">
                      <Radio name="same_domain" value="1">
                        True
                      </Radio>
                      <Radio name="same_domain" value="0">
                        False
                      </Radio>
                    </Stack>
                  </RadioGroup>
                  <Box>
                    <label>Maximum links to crawl</label>
                    <NumberInput
                      step={5}
                      defaultValue={100}
                      min={10}
                      max={1000}
                    >
                      <NumberInputField
                        name="limit"
                        value={props.values.limit}
                        onChange={props.handleChange}
                      />
                    </NumberInput>
                  </Box>
                </Stack>
                <Flex mt="9" justifyContent="end">
                  <Button variant="primary" mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button
                    onClick={props.handleSubmit}
                    type="submit"
                    variant="primaryRedBtn"
                  >
                    Start Crawling
                  </Button>
                </Flex>
              </form>
            )}
          </Formik>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
