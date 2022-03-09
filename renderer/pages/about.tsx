import { TextField } from '@mui/material'
import Link from 'next/link'
import Layout from '../components/Layout'

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript + Electron Example">
    <h1>About</h1>
    <div>
      <TextField
        multiline 
        maxRows={15}
        label="Markdown"
        sx={{ 
          width: '48%',
          padding: '5px'
        }}
      />
      <TextField
        multiline 
        maxRows={15}
        label="Compiled"
        sx={{ 
          width: '48%',
          padding: '5px'
        }}
        InputProps={{
          readOnly: true,
        }}
      />
    </div>
  </Layout>
)

export default AboutPage
