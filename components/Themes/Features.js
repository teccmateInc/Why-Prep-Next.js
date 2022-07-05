import React from 'react'

const Features = () => {
  return (
    <div>
        <div className="col-12 py-4 text-center bg-dark">
        <h5 className="category-heading">Features</h5>
      </div>
      <div className='container'>
        <div className='row justify-content-center' style={{padding:"8vmax 0"}}>
            <div className='col-md-10'>
                <div className='row justify-content-between align-items-center'>
                    <div className='col-md-5'>
                        <div className='themeFeature'>
                            <img className='themeFeatures-img' src="/images/customLogo.jpeg"/>
                            <div>
                                <h6 className='themeFeatures-heading'>Custom Logo</h6>
                                <p className='themeFeatures-content'>Customize your logo design onto the web template</p>
                            </div>
                        </div>
                        <div className='themeFeature'>
                            <img className='themeFeatures-img' src="/images/colorPalette.jpeg"/>
                            <div  >
                                <h6 className='themeFeatures-heading'>Color Palette</h6>
                                <p className='themeFeatures-content'>Default palette for each theme is provided, specific colors can be adjusted</p>
                            </div>
                        </div>
                        <div className='themeFeature'>
                            <img className='themeFeatures-img' src="/images/ABC.jpeg"/>
                            <div>
                                <h6 className='themeFeatures-heading'>Font Choices</h6>
                                <p className='themeFeatures-content'>Variety of typefaces to match your brand</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-5'>
                        <div className='themeFeature'>
                            <img className='themeFeatures-img' src="/images/image.jpeg"/>
                            <div>
                                <h6 className='themeFeatures-heading'>Images</h6>
                                <p className='themeFeatures-content'>Place your product image in the templates</p>
                            </div>
                        </div>
                        <div className='themeFeature'>
                            <img className='themeFeatures-img' src="/images/layout.jpeg"/>
                            <div>
                                <h6 className='themeFeatures-heading'>Order of layout</h6>
                                <p className='themeFeatures-content'>Tell story through built in layout, clear visual hierarchy.</p>
                            </div>
                        </div>
                        <div className='themeFeature'>
                            <img className='themeFeatures-img' src="/images/gallery.jpeg"/>
                            <div>
                                <h6 className='themeFeatures-heading'>Gallery options</h6>
                                <p className='themeFeatures-content'>For carousel of products images</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <hr />
    </div>
  )
}

export default Features