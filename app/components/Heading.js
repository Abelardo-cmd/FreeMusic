import Btn from './Button'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';


export default function Header(){
    return(<header>
            <div className="superior header background">
                <div className='center'>
                    <button className='home background'><HomeOutlinedIcon  sx={{ fontSize: 60}}/></button>
                    <button className='home background'><SearchIcon  sx={{ fontSize: 50}}/></button>
                </div>
            </div>
            <div className="inferior header background">
              <button className='home background'><VideoLibraryIcon  sx={{ fontSize: 50}}/></button>
            </div>
           </header>)
}