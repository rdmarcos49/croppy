import { useState } from 'react'
import { Layout, Toolbar, LayerList, Footer, CropImage, UploadImage } from './components'

export const App = () => {
  const [file, setFile] = useState<File | null>(null)

  const handleOnUpload = (userFile: File) => {
    setFile(userFile)
  }

  return (
    <Layout>
      <Toolbar />
      {file
        ? <CropImage />
        : <UploadImage onUpload={handleOnUpload} />
      }
      <LayerList />
      <Footer />
    </Layout>
  )
}

export default App
