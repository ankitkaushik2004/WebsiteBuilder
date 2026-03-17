import React  from 'react'
import { AnimatePresence, motion } from "motion/react"
import { signInWithPopup } from 'firebase/auth'
import axios from "axios"
import { auth, provider } from '../firebase'
import { serverUrl } from '../App'

const LoginModel = ({ open, onClose }) => {

  const handleGoogleAuth =async ()=>{
    try {
      const result =await signInWithPopup(auth,provider)
      const{data}=await axios.post(`${serverUrl}/api/auth/google`,{
        name:result.user.displayName,
        email:result.user.email,
        avatar:result.user.photoURL
      },{withCredentials:true})
      console.log(data);
      

     
      
      
    } catch (error) {
      console.log(error);
      
      
      
    }

  }
  return (
    <AnimatePresence>
      {open && <motion.div className='fixed inset-0 z-[100] flex items-center justify-center bg-black/80
    backdrop-blur-xl px-4'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose} >

        <motion.div
          initial={{ scale: 0.88, opacity: 0, y: 60 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ duration: 0.45, ease: "easeOut" }}
          className='realtive w-full max-w-md p-[1px] rounded-3xl bg-gradient-to-br
              from-purple-500/70 via-blue-500/60 to-transparent ' onClick={(e)=>e.stopPropagation()}
        >
          <div className='relative rounded-3xl bg-[#0b0b0b] border border-white/10 shadow-
                [0_30px_120px_rgba(0,0,0,0.8)] overflow-hidden '>
            <motion.div
              animate={{ opacity: [0.25, 0.4, 0.25] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -top-32 -left-32 w-80 h-80 bg-purple-500/25 blur-
                  [140px]"
            />
            <motion.div
             animate={{ opacity: [0.2, 0.35, 0.2] }}
              transition={{ duration: 6, repeat: Infinity,delay:2 }}
              className="absolute -bottom-32 -right-32 w-80 h-80 bg-blue-500/25 blur-
                  [140px]'" />

                  <button className='absolute top-5 right-5 z-20 text-zinc-400 hover:text-white
                  transition text-lg'
                  onClick={onClose}> 
                    x
                  </button>

                  <div className='relative px-8 pt-14 pb-10 text-center'>
                    <h1 className='inline-block mb-6 px-4 py-1.5 rounded-full bg-white/5
                    border border-white/10 text-xs text-zinc-300'>Ai-Powered website Builder</h1>
                    
                    <h2 className='text-3xl font-semibold leading-tight mb-3 space-x-2'>
                      <span>Welcome to</span>
                      <span className='bg-linear-to-r from-purple-400 to-blue-400
                      bg-clip-text text-transparent'>Genweb.ai</span>   </h2>

                      <motion.button
                      whileHover={{scale:1.04}}
                      whileTap={{scale:0.96}}

                      onClick={handleGoogleAuth}

                      
                      
                      className='group relative w-full h-9 rounded-xl bg-white 
                      text-black font-semibold shadow-xl overflow-hidden'>
                       <div className='relative flex items-center justify-center gap-3 ' >
                         <img src="data:image/png;base64,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"
                        alt=""  className='h-6 w-6'/>
                           Continue with Google
                     
                       </div>
                    
                      </motion.button>


                      <div className='flex items-center gap-4 my-10'>
                        <div className='h-px flex-1 bg-white/10'/>
                        <span className='text-xs text-zinc-500 tracking-wide'>Secure Login</span>
                        <div className='h-px flex-1 bg-white/10'/>


                      </div>
                      <p className='text-xs text-zinc-500 leading-relaxed'>
                         By continuing ,you agree to our{" "}
                        <span className='underline cursor-pointer hover:text-zinc-300' >
                          Terms of Service 
                        </span> {" "}
                        and{" "}
                        <span className='underline cursor-pointer hover:text-zinc-300'>
                          Privacy Policy
                        </span>
                      </p>

                    
                

                  </div>

          </div>

        </motion.div>

      </motion.div>
      }


    </AnimatePresence>
  )

}

export default LoginModel
