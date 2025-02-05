import MyLogo from '../assets/images/MyLogo.svg';
 
 const Logo = ({ className }) => {
  return (
    <div className={`flex items-center ${className}`}>
    <img src={MyLogo} alt="MyLogo" className="h-20 w-20" />      
    </div>
  )
}

export default Logo;