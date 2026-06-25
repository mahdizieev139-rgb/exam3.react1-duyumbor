import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function Accordions() {
  return (
    <div className="w-[90%] m-auto! p-4">
      <h1 className="font-bold text-6xl">FAQ</h1><br />
      <Accordion
        defaultExpanded
        sx={{
          backgroundColor: 'transparent',
          color: 'white',
          boxShadow: 'none',
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
          '&:before': { display: 'none' },
          margin: '0 !important',
        }}
      >
        <AccordionSummary
          expandIcon={<ChevronRightIcon sx={{ color: '#fcd34d', fontSize: '28px' }} />}
          sx={{
            padding: '12px 0',
            '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
              transform: 'rotate(90deg)',
            },
            '& .MuiAccordionSummary-content': {
              margin: '0',
            }
          }}
        >
          <Typography sx={{ fontSize: { xs: '15px', md: '18px' }, fontWeight: '400', opacity: 0.9 }}>
            The largest and oldest Quotations Page on the Web with about 30 categories
          </Typography>
        </AccordionSummary>

        <AccordionDetails sx={{ padding: '0 0 24px 0', maxWidth: '900px' }}>
          <Typography sx={{ color: 'gray', fontSize: '14px' }}>
            Sed in sem pellentesque, eleifend erat vitae, tincidunt turpis. Pellentesque augue elit, rutrum sit amet commodo vel, porta quis purus.
            Nullam faucibus, odio eu bibendum auctor, eros dolor aliquet purus, sit amet pellentesque neque est id tortor. In egestas, erat a dapibus
            dapibus, mi augue ornare lorem, nec pretium ligula purus nec tellus. Aenean a scelerisque nisi. Nullam pretium fermentum nunc, feugiat
            placerat urna rutrum eget. Nullam mattis justo consequat risus. Donec imperdiet enim id efficitur pharetra. Nam sollicitudin at est eget
            auctor. Ut sed ante quis nulla tincidunt auctor. Quisque accumsan pretium tincidunt. Etiam viverra ultrices est vitae suscipit. Pellentesque
            elementum purus non nisl pharetra consequat. Nunc in venenatis orci.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          backgroundColor: 'transparent',
          color: 'white',
          boxShadow: 'none',
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
          '&:before': { display: 'none' },
          margin: '0 !important',
        }}
      >
        <AccordionSummary
          expandIcon={<ChevronRightIcon sx={{ color: '#fcd34d', fontSize: '28px' }} />}
          sx={{
            padding: '18px 0',
            '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
              transform: 'rotate(90deg)',
            },
            '& .MuiAccordionSummary-content': { margin: '0' }
          }}
        >
          <Typography sx={{ fontSize: { xs: '15px', md: '18px' }, fontWeight: '400', opacity: 0.9 }}>
            A huge collection of inspirational quotes, thoughts of greatest minds in history
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: '0 0 24px 0' }}>
          <Typography sx={{ color: 'gray', fontSize: '14px' }}>
            Sed in sem pellentesque, eleifend erat vitae, tincidunt turpis. Pellentesque augue elit, rutrum sit amet commodo vel, porta quis purus.
            Nullam faucibus, odio eu bibendum auctor, eros dolor aliquet purus, sit amet pellentesque neque est id tortor. In egestas, erat a dapibus
            dapibus, mi augue ornare lorem, nec pretium ligula purus nec tellus. Aenean a scelerisque nisi. Nullam pretium fermentum nunc, feugiat
            placerat urna rutrum eget. Nullam mattis justo consequat risus. Donec imperdiet enim id efficitur pharetra. Nam sollicitudin at est eget
            auctor. Ut sed ante quis nulla tincidunt auctor. Quisque accumsan pretium tincidunt. Etiam viverra ultrices est vitae suscipit. Pellentesque
            elementum purus non nisl pharetra consequat. Nunc in venenatis orci.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          backgroundColor: 'transparent',
          color: 'white',
          boxShadow: 'none',
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
          '&:before': { display: 'none' },
          margin: '0 !important',
        }}
      >
        <AccordionSummary
          expandIcon={<ChevronRightIcon sx={{ color: '#fcd34d', fontSize: '28px' }} />}
          sx={{
            padding: '18px 0',
            '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
              transform: 'rotate(90deg)',
            },
            '& .MuiAccordionSummary-content': { margin: '0' }
          }}
        >
          <Typography sx={{ fontSize: { xs: '15px', md: '18px' }, fontWeight: '400', opacity: 0.9 }}>
            Quotations from the great works of literature
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: '0 0 24px 0' }}>
         <Typography sx={{ color: 'gray', fontSize: '14px' }}>
            Sed in sem pellentesque, eleifend erat vitae, tincidunt turpis. Pellentesque augue elit, rutrum sit amet commodo vel, porta quis purus.
            Nullam faucibus, odio eu bibendum auctor, eros dolor aliquet purus, sit amet pellentesque neque est id tortor. In egestas, erat a dapibus
            dapibus, mi augue ornare lorem, nec pretium ligula purus nec tellus. Aenean a scelerisque nisi. Nullam pretium fermentum nunc, feugiat
            placerat urna rutrum eget. Nullam mattis justo consequat risus. Donec imperdiet enim id efficitur pharetra. Nam sollicitudin at est eget
            auctor. Ut sed ante quis nulla tincidunt auctor. Quisque accumsan pretium tincidunt. Etiam viverra ultrices est vitae suscipit. Pellentesque
            elementum purus non nisl pharetra consequat. Nunc in venenatis orci.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: 'transparent',
          color: 'white',
          boxShadow: 'none',
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
          '&:before': { display: 'none' },
          margin: '0 !important',
        }}
      >
        <AccordionSummary
          expandIcon={<ChevronRightIcon sx={{ color: '#fcd34d', fontSize: '28px' }} />}
          sx={{
            padding: '18px 0',
            '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
              transform: 'rotate(90deg)',
            },
            '& .MuiAccordionSummary-content': { margin: '0' }
          }}
        >
          <Typography sx={{ fontSize: { xs: '15px', md: '18px' }, fontWeight: '400', opacity: 0.9 }}>
            Read quotes and sayings from famous people in history
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: '0 0 24px 0' }}>
         <Typography sx={{ color: 'gray', fontSize: '14px' }}>
            Sed in sem pellentesque, eleifend erat vitae, tincidunt turpis. Pellentesque augue elit, rutrum sit amet commodo vel, porta quis purus.
            Nullam faucibus, odio eu bibendum auctor, eros dolor aliquet purus, sit amet pellentesque neque est id tortor. In egestas, erat a dapibus
            dapibus, mi augue ornare lorem, nec pretium ligula purus nec tellus. Aenean a scelerisque nisi. Nullam pretium fermentum nunc, feugiat
            placerat urna rutrum eget. Nullam mattis justo consequat risus. Donec imperdiet enim id efficitur pharetra. Nam sollicitudin at est eget
            auctor. Ut sed ante quis nulla tincidunt auctor. Quisque accumsan pretium tincidunt. Etiam viverra ultrices est vitae suscipit. Pellentesque
            elementum purus non nisl pharetra consequat. Nunc in venenatis orci.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: 'transparent',
          color: 'white',
          boxShadow: 'none',
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
          '&:before': { display: 'none' },
          margin: '0 !important',
        }}
      >
        <AccordionSummary
          expandIcon={<ChevronRightIcon sx={{ color: '#fcd34d', fontSize: '28px' }} />}
          sx={{
            padding: '18px 0',
            '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
              transform: 'rotate(90deg)',
            },
            '& .MuiAccordionSummary-content': { margin: '0' }
          }}
        >
          <Typography sx={{ fontSize: { xs: '15px', md: '18px' }, fontWeight: '400', opacity: 0.9 }}>
            Collected quotes from Albert Einstein
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: '0 0 24px 0' }}>
         <Typography sx={{ color: 'gray', fontSize: '14px' }}>
            Sed in sem pellentesque, eleifend erat vitae, tincidunt turpis. Pellentesque augue elit, rutrum sit amet commodo vel, porta quis purus.
            Nullam faucibus, odio eu bibendum auctor, eros dolor aliquet purus, sit amet pellentesque neque est id tortor. In egestas, erat a dapibus
            dapibus, mi augue ornare lorem, nec pretium ligula purus nec tellus. Aenean a scelerisque nisi. Nullam pretium fermentum nunc, feugiat
            placerat urna rutrum eget. Nullam mattis justo consequat risus. Donec imperdiet enim id efficitur pharetra. Nam sollicitudin at est eget
            auctor. Ut sed ante quis nulla tincidunt auctor. Quisque accumsan pretium tincidunt. Etiam viverra ultrices est vitae suscipit. Pellentesque
            elementum purus non nisl pharetra consequat. Nunc in venenatis orci.
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}
