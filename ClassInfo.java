public class ClassInfo
{
    private String course, cid;
    public ClassInfo()
    {

    }
    public ClassInfo(String course,String cid)
    {
        this.course=course;
        this.cid=cid;
    }
    public String getCourse()
    {
        return course;
    }
    public String getCid()
    {
        return cid;
    }

    public void setCourse(String course)
    {
        this.course=course;
    }
    public void setCid(String cid)
    {
        this.cid=cid;
    }
    public void displaymember(int nGrad,int nUnder, UnderGrastudent Under[],GradStudent Grad[],ClassInfo cl1[], ClassInfo cl2[])
    {
        ClassInfo[] cl=new ClassInfo[nGrad+nUnder];
        cl[0]=new ClassInfo("Programing","P1");
        cl[1]=new ClassInfo("Programing","P2");
        cl[2]=new ClassInfo("Database","D1");
        cl[3]=new ClassInfo("Database","D2");
        cl[4]=new ClassInfo("Advance Artificial Intelligence","AAI");
         int temp=0;

        for(int i=0;i<nGrad;i++)
        {   System.out.println(cl[temp].getCid()+" "+cl[temp].getCourse());
            if(cl1[i].getCid().equals(cl[temp].getCid()))
            {
            System.out.println("Enter your Grastudent id: "+  Grad[i].getSid()); 
            System.out.println("Enter your fullname: "+ Grad[i].getFullname()); 
            System.out.println("Enter your promotion : "+ Grad[i].getpromotion());
            System.out.println("Enter your department: "+ Grad[i].getDepartment()); 
            System.out.println("Enter your specialty: "+ Grad[i].getSpeciality()); 
            System.out.println("Enter your class id: "+ cl1[i].getCid());
            System.out.println("Enter your class course: "+ cl1[i].getCourse());
            }
            ++temp;
        }
        for(int i=0;i<nUnder;i++)
        {
            System.out.println(cl[4].getCid()+" "+cl[4].getCourse());
            if(cl2[i].getCid().equals(cl[4].getCid()))
            {
            System.out.println("Enter your Grastudent id: "+ Under[i].getSid()); 
            System.out.println("Enter your fullname: "+ Under[i].getFullname()); 
            System.out.println("Enter your promotion : " + Under[i].getpromotion()); 
            System.out.println("Enter your department: " + Under[i].getDepartment()); 
            System.out.println("Enter your major: " + Under[i].getMajor()); 
            System.out.println("Enter your class id: "+ cl2[i].getCid());
            System.out.println("Enter your class course: "+ cl2[i].getCourse());
            }
        }
    }
}