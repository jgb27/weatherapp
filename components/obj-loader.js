/* eslint-disable react/display-name */
import { forwardRef } from 'react'
import { Box } from '@chakra-ui/react'

export const ObjContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="obj3d"
    w="300px"
    h="300px"
    my="-5"
    position="relative"
  >
    {children}
  </Box>
))

const Loader = () => {
  return (
    <ObjContainer>
    </ObjContainer>
  )
}

export default Loader