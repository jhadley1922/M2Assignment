using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Configuration;
using System.Linq;
using System.Threading.Tasks;

namespace M2Assignment.Models
{
    public class GradeCalculatorModel
    {
        [Range(0, 100,
        ErrorMessage = "Value for {0} must be between {1} and {2}.")]
        public int Assignment { get; set; }
        [Range(0, 100,
        ErrorMessage = "Value for {0} must be between {1} and {2}.")]
        public int Group { get; set; }
        [Range(0, 100,
        ErrorMessage = "Value for {0} must be between {1} and {2}.")]
        public int Quiz { get; set; }
        [Range(0, 100,
        ErrorMessage = "Value for {0} must be between {1} and {2}.")]
        public int Exam { get; set; }
        [Range(0, 100,
        ErrorMessage = "Value for {0} must be between {1} and {2}.")]
        public int Intex { get; set; }
    }
}
