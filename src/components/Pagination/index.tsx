import { Stack, Box, Text } from '@chakra-ui/react';

import { PaginationItem } from './PaginationItem';

interface PaginationProps {
  totalCountOfRegisters: number;
  registerPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter(page => page > 0)
}

export function Pagination({
  totalCountOfRegisters,
  registerPerPage = 10,
  currentPage = 1,
  onPageChange
}: PaginationProps) {
  const lastPage = Math.floor(totalCountOfRegisters / registerPerPage);

  const previousPages = currentPage > 1
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : []

    const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : []

  return(
    <Stack
      spacing="6"
      direction={["column", "row"]}
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>

      <Stack spacing="2" direction="row">

        {currentPage > (siblingsCount + 1) && (
          <>
            <PaginationItem onPageChange={onPageChange} pageNumber={1} />
            { currentPage > (2 + siblingsCount) && 
              <Text color="gray.500" w="8" textAlign="center">...</Text>
            }
          </>
        )}
        
        {previousPages.length > 0 && previousPages.map(page => (
          <PaginationItem onPageChange={onPageChange} key={page} pageNumber={page} />
        ))}
        
        <PaginationItem onPageChange={onPageChange} isCurrent pageNumber={currentPage} />
        
        {nextPages.length > 0 && nextPages.map(page => (
          <PaginationItem onPageChange={onPageChange} key={page} pageNumber={page} />
        ))}

        {(currentPage + siblingsCount) < lastPage && (
          <>
            { (currentPage + 1 + siblingsCount) < lastPage && 
              <Text color="gray.500" w="8" textAlign="center">...</Text>
            }

            <PaginationItem onPageChange={onPageChange} pageNumber={lastPage} />
          </>
        )}
        
      </Stack>
    </Stack>
  )
}